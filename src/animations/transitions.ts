import type { Layout } from "../types/content";

const editorialEase: [number, number, number, number] = [0.2, 0.65, 0.25, 1];

export function sceneTransition(reduced: boolean, layout: Layout) {
  const entry = {
    hero: { opacity: 0, scale: 1.025 },
    statement: { opacity: 0, y: 22 },
    timeline: { opacity: 0, x: -28 },
    mural: { opacity: 0, scale: 0.985 },
    food: { opacity: 0, clipPath: "inset(0 0 0 7%)" },
    player: { opacity: 0, x: 24 },
    event: { opacity: 0, scale: 1.015 },
    sequence: { opacity: 0, x: 20 },
    reflection: { opacity: 0, y: 16 },
    cases: { opacity: 0, y: 14 },
    people: { opacity: 0, clipPath: "inset(0 0 6% 0)" },
    present: { opacity: 0, y: 20 },
    closing: { opacity: 0, clipPath: "inset(0 0 0 8%)" },
    participants: { opacity: 0, y: 18 },
  }[layout];
  return {
    initial: reduced ? { opacity: 0 } : entry,
    animate: layout === "hero" && !reduced
      ? { opacity: 1, scale: 1 }
      : layout === "food" && !reduced || layout === "closing" && !reduced || layout === "people" && !reduced
        ? { opacity: 1, clipPath: "inset(0)" }
        : { opacity: 1, x: 0, y: 0, scale: 1 },
    exit: { opacity: 0, y: reduced ? 0 : -6 },
    transition: {
      duration: reduced ? 0 : layout === "event" || layout === "closing" ? 0.55 : 0.42,
      ease: editorialEase,
    },
  };
}

export function titleTransition(reduced: boolean) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.65, delay: reduced ? 0 : 0.12 },
  };
}

export function wordTransition(index: number, reduced: boolean) {
  return {
    initial: { y: reduced ? 0 : "105%" },
    animate: { y: 0 },
    transition: {
      duration: reduced ? 0 : 0.75,
      delay: reduced ? 0 : 0.15 + index * 0.07,
      ease: editorialEase,
    },
  };
}
