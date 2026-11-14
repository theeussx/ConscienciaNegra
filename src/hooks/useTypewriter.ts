import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

export interface TypewriterOptions {
  charsPerSecond?: number;
  startDelayMs?: number;
  punctuationPauseMs?: number;
  newlinePauseMs?: number;
}

export type TypewriterStatus = "typing" | "paused" | "done";

export interface TypewriterState {
  units: string[];
  index: number;
  carryMs: number;
  waitMs: number;
  status: TypewriterStatus;
  charsPerSecond: number;
  startDelayMs: number;
  punctuationPauseMs: number;
  newlinePauseMs: number;
}

type SegmenterConstructor = new (
  locale?: string,
  options?: { granularity: "grapheme" },
) => { segment(input: string): Iterable<{ segment: string }> };

const SegmenterClass = (Intl as unknown as { Segmenter?: SegmenterConstructor }).Segmenter;
const graphemeSegmenter = SegmenterClass ? new SegmenterClass("pt-BR", { granularity: "grapheme" }) : null;

/** Divide o texto em grafemas, para nunca separar letras acentuadas ou emojis compostos. */
export function segmentGraphemes(text: string): string[] {
  if (graphemeSegmenter) {
    return Array.from(graphemeSegmenter.segment(text), (part) => part.segment);
  }
  return Array.from(text);
}

const DEFAULTS = {
  charsPerSecond: 48,
  startDelayMs: 400,
  punctuationPauseMs: 240,
  newlinePauseMs: 380,
};

/** Cria o estado inicial. Com instant=true (movimento reduzido), o texto já aparece completo. */
export function createTypewriter(text: string, options: TypewriterOptions = {}, instant = false): TypewriterState {
  const config = { ...DEFAULTS, ...options };
  const units = segmentGraphemes(text);
  const finished = instant || units.length === 0;
  return {
    units,
    index: finished ? units.length : 0,
    carryMs: 0,
    waitMs: finished ? 0 : config.startDelayMs,
    status: finished ? "done" : "typing",
    charsPerSecond: config.charsPerSecond,
    startDelayMs: config.startDelayMs,
    punctuationPauseMs: config.punctuationPauseMs,
    newlinePauseMs: config.newlinePauseMs,
  };
}

function unitCost(unit: string, state: TypewriterState): number {
  const base = 1000 / state.charsPerSecond;
  if (unit === "\n") return base + state.newlinePauseMs;
  if (/^[.!?…]$/u.test(unit)) return base + state.punctuationPauseMs;
  if (/^[,;:]$/u.test(unit)) return base + Math.round(state.punctuationPauseMs / 2);
  return base;
}

/** Avança a digitação por deltaMs. Função pura, usada pelo hook e pelos testes. */
export function advanceTypewriter(state: TypewriterState, deltaMs: number): TypewriterState {
  if (state.status !== "typing" || deltaMs <= 0) return state;

  let budget = deltaMs;
  let waitMs = state.waitMs;
  if (waitMs > 0) {
    const used = Math.min(waitMs, budget);
    waitMs -= used;
    budget -= used;
    if (waitMs > 0) return { ...state, waitMs };
  }

  let carryMs = state.carryMs + budget;
  let index = state.index;
  while (index < state.units.length) {
    const cost = unitCost(state.units[index], state);
    if (carryMs < cost) break;
    carryMs -= cost;
    index += 1;
  }

  if (index >= state.units.length) {
    return { ...state, index: state.units.length, carryMs: 0, waitMs: 0, status: "done" };
  }
  return { ...state, index, carryMs, waitMs };
}

/**
 * Digitação progressiva com controles de pausar, continuar, completar e reiniciar.
 * Ao trocar o texto ou desmontar o componente, a animação anterior é cancelada.
 */
export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const reduceMotion = useReducedMotion() ?? false;
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const reduceRef = useRef(reduceMotion);
  reduceRef.current = reduceMotion;

  const [state, setState] = useState<TypewriterState>(() => createTypewriter(text, options, reduceMotion));

  useEffect(() => {
    setState(createTypewriter(text, optionsRef.current, reduceRef.current));
  }, [text]);

  const status = state.status;
  useEffect(() => {
    if (status !== "typing") return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = Math.min(now - last, 100);
      last = now;
      setState((current) => advanceTypewriter(current, delta));
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [status, text]);

  const toggle = useCallback(
    () =>
      setState((s) =>
        s.status === "typing" ? { ...s, status: "paused" } : s.status === "paused" ? { ...s, status: "typing" } : s,
      ),
    [],
  );
  const pause = useCallback(
    () => setState((s) => (s.status === "typing" ? { ...s, status: "paused" } : s)),
    [],
  );
  const resume = useCallback(
    () => setState((s) => (s.status === "paused" ? { ...s, status: "typing" } : s)),
    [],
  );
  const complete = useCallback(
    () =>
      setState((s) =>
        s.status === "done" ? s : { ...s, index: s.units.length, carryMs: 0, waitMs: 0, status: "done" },
      ),
    [],
  );
  const restart = useCallback(
    () =>
      setState((s) => ({
        ...s,
        index: 0,
        carryMs: 0,
        waitMs: 0,
        status: s.units.length > 0 ? "typing" : "done",
      })),
    [],
  );

  return {
    text,
    typed: state.units.slice(0, state.index).join(""),
    rest: state.units.slice(state.index).join(""),
    status: state.status,
    progress: state.units.length > 0 ? state.index / state.units.length : 1,
    pause,
    resume,
    toggle,
    complete,
    restart,
  };
}
