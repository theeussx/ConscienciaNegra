import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { chapters } from "../content/chapters";
import { presentationSettings } from "../content/presentationSettings";
import type { DetailId } from "../content/details";

/** Índice do próximo marco abaixo da âncora. Função pura, testável. */
export function pickNextBeatIndex(tops: number[], anchor: number, epsilon = 8): number {
  for (let i = 0; i < tops.length; i += 1) {
    if (tops[i] > anchor + epsilon) return i;
  }
  return -1;
}

/** Índice do marco anterior à âncora. Função pura, testável. */
export function pickPrevBeatIndex(tops: number[], anchor: number, epsilon = 8): number {
  for (let i = tops.length - 1; i >= 0; i -= 1) {
    if (tops[i] < anchor - epsilon) return i;
  }
  return -1;
}

export interface PresentationValue {
  detailId: DetailId | null;
  openDetail: (id: DetailId) => void;
  closeDetail: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  notesOpen: boolean;
  toggleNotes: () => void;
  autoOn: boolean;
  toggleAuto: () => void;
  fullscreen: boolean;
  toggleFullscreen: () => void;
  activeChapter: number;
  goNext: () => boolean;
  goPrev: () => boolean;
  goToChapter: (index: number) => void;
  overlayOpen: boolean;
}

const PresentationContext = createContext<PresentationValue | null>(null);

function beatNodes(): HTMLElement[] {
  return Array.from(document.querySelectorAll<HTMLElement>("[data-beat]"));
}

/**
 * Estado único da apresentação: diálogo, menus, modo automático, tela cheia,
 * capítulo ativo e teclado. Os controles de rolagem não bloqueiam o scroll natural.
 */
export function PresentationProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion() ?? false;
  const [detailId, setDetailId] = useState<DetailId | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [autoOn, setAutoOn] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const overlayOpen = detailId !== null || menuOpen;

  const openDetail = useCallback((id: DetailId) => setDetailId(id), []);
  const closeDetail = useCallback(() => setDetailId(null), []);
  const toggleNotes = useCallback(() => setNotesOpen((value) => !value), []);
  const toggleAuto = useCallback(() => setAutoOn((value) => !value), []);

  const scrollToY = useCallback(
    (top: number) => {
      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
    },
    [reduceMotion],
  );

  const goNext = useCallback((): boolean => {
    const nodes = beatNodes();
    const anchor = window.innerHeight * presentationSettings.beatAnchor;
    const index = pickNextBeatIndex(nodes.map((node) => node.getBoundingClientRect().top), anchor);
    if (index < 0) return false;
    scrollToY(window.scrollY + nodes[index].getBoundingClientRect().top - anchor);
    return true;
  }, [scrollToY]);

  const goPrev = useCallback((): boolean => {
    const nodes = beatNodes();
    const anchor = window.innerHeight * presentationSettings.beatAnchor;
    const index = pickPrevBeatIndex(nodes.map((node) => node.getBoundingClientRect().top), anchor);
    if (index < 0) {
      scrollToY(0);
      return false;
    }
    scrollToY(window.scrollY + nodes[index].getBoundingClientRect().top - anchor);
    return true;
  }, [scrollToY]);

  const goToChapter = useCallback(
    (index: number) => {
      const meta = chapters[index];
      const section = meta ? document.getElementById(meta.id) : null;
      if (!section) return;
      scrollToY(window.scrollY + section.getBoundingClientRect().top);
      section.querySelector<HTMLElement>("h2")?.focus({ preventScroll: true });
    },
    [scrollToY],
  );

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      void document.exitFullscreen?.().catch(() => undefined);
    } else {
      void document.documentElement.requestFullscreen?.().catch(() => undefined);
    }
  }, []);

  useEffect(() => {
    const sync = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", sync);
    return () => document.removeEventListener("fullscreenchange", sync);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dialog-open", overlayOpen);
    return () => document.documentElement.classList.remove("dialog-open");
  }, [overlayOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[data-chapter]"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveChapter(Number(entry.target.getAttribute("data-index")));
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoOn || overlayOpen) return;
    const id = window.setInterval(() => {
      if (!goNext()) setAutoOn(false);
    }, presentationSettings.autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [autoOn, overlayOpen, goNext]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.altKey) return;
      const target = event.target instanceof HTMLElement ? event.target : null;
      if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;

      if (event.key === "Escape") {
        if (detailId !== null) {
          event.preventDefault();
          closeDetail();
        } else if (menuOpen) {
          event.preventDefault();
          setMenuOpen(false);
        } else if (notesOpen) {
          event.preventDefault();
          setNotesOpen(false);
        }
        return;
      }

      // Com um diálogo aberto, o teclado pertence ao conteúdo ativo (Espaço pausa a digitação).
      if (overlayOpen) return;

      const onControl = Boolean(target?.closest("button, a[href], [role='button']"));
      if ((event.key === " " || event.key === "Enter") && onControl) return;

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          goNext();
          break;
        case "ArrowUp":
          event.preventDefault();
          goPrev();
          break;
        case " ":
          event.preventDefault();
          if (event.shiftKey) goPrev();
          else goNext();
          break;
        default: {
          const key = event.key.toLowerCase();
          if (key === "f") toggleFullscreen();
          else if (key === "n") setNotesOpen((value) => !value);
          else if (key === "a") setAutoOn((value) => !value);
          else if (key === "c") setMenuOpen(true);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detailId, menuOpen, notesOpen, overlayOpen, goNext, goPrev, toggleFullscreen, closeDetail]);

  const value = useMemo<PresentationValue>(
    () => ({
      detailId,
      openDetail,
      closeDetail,
      menuOpen,
      setMenuOpen,
      notesOpen,
      toggleNotes,
      autoOn,
      toggleAuto,
      fullscreen,
      toggleFullscreen,
      activeChapter,
      goNext,
      goPrev,
      goToChapter,
      overlayOpen,
    }),
    [
      detailId,
      openDetail,
      closeDetail,
      menuOpen,
      notesOpen,
      toggleNotes,
      autoOn,
      toggleAuto,
      fullscreen,
      toggleFullscreen,
      activeChapter,
      goNext,
      goPrev,
      goToChapter,
      overlayOpen,
    ],
  );

  return createElement(PresentationContext.Provider, { value }, children);
}

export function usePresentation(): PresentationValue {
  const value = useContext(PresentationContext);
  if (!value) throw new Error("usePresentation precisa estar dentro de PresentationProvider.");
  return value;
}
