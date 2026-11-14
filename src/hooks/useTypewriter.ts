import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

function splitGraphemes(value: string) {
  if (typeof Intl.Segmenter === "function") {
    return Array.from(
      new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(value),
      ({ segment }) => segment,
    );
  }
  return Array.from(value);
}

export function useTypewriter(text: string, active = true, rate = 38) {
  const reduced = useReducedMotion();
  const graphemes = useMemo(() => splitGraphemes(text), [text]);
  const [count, setCount] = useState(0);
  const [paused, setPaused] = useState(false);
  const frame = useRef<number | null>(null);
  const startedAt = useRef<number | null>(null);
  const durationPerGrapheme = 1000 / Math.max(rate, 1);

  const cancel = useCallback(() => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
  }, []);

  useEffect(() => {
    cancel();
    startedAt.current = null;
    setPaused(false);
    setCount(reduced || !active ? graphemes.length : 0);
    return cancel;
  }, [active, cancel, graphemes.length, reduced, text]);

  useEffect(() => {
    if (!active || reduced || paused || count >= graphemes.length) {
      cancel();
      return;
    }

    const tick = (now: number) => {
      if (startedAt.current === null) {
        startedAt.current = now - count * durationPerGrapheme;
      }
      const nextCount = Math.min(
        graphemes.length,
        Math.floor((now - startedAt.current) / durationPerGrapheme),
      );
      setCount(nextCount);
      if (nextCount < graphemes.length) frame.current = requestAnimationFrame(tick);
      else frame.current = null;
    };

    frame.current = requestAnimationFrame(tick);
    return cancel;
  }, [active, cancel, count, durationPerGrapheme, graphemes.length, paused, reduced]);

  const complete = useCallback(() => {
    cancel();
    setPaused(false);
    setCount(graphemes.length);
  }, [cancel, graphemes.length]);

  const pause = useCallback(() => {
    cancel();
    setPaused(true);
  }, [cancel]);

  const resume = useCallback(() => setPaused(false), []);

  const restart = useCallback(() => {
    cancel();
    startedAt.current = null;
    setPaused(false);
    setCount(0);
  }, [cancel]);

  return {
    visible: graphemes.slice(0, count).join(""),
    complete,
    pause,
    resume,
    toggle: paused ? resume : pause,
    paused,
    done: count >= graphemes.length,
    restart,
  };
}
