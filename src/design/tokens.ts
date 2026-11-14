import type { Variants } from "motion/react";

/** Paleta de referência. Espelhada em @theme (src/index.css). */
export const palette = {
  ink: "#171714",
  surface: "#24231E",
  cream: "#F4ECDD",
  creamDim: "#CFC6B3",
  terracotta: "#C46F4F",
  olive: "#848C65",
  amber: "#DBA66D",
} as const;

/** Curva de desaceleração suave, usada em todas as revelações. */
export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Durações em segundos. A maioria das revelações fica entre 0,3 e 0,7 s. */
export const duration = {
  micro: 0.18,
  fast: 0.35,
  base: 0.55,
  cinematic: 0.9,
} as const;

export type RevealVariant = "up" | "fade" | "lateral" | "mask" | "scale" | "photo";

/** Sistema de revelação reutilizável. Cada variante tem uma função narrativa. */
export const revealVariants: Record<RevealVariant, Variants> = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  lateral: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  mask: {
    hidden: { clipPath: "inset(0% 0% 100% 0%)" },
    show: { clipPath: "inset(0% 0% 0% 0%)" },
  },
  scale: { hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } },
  photo: {
    hidden: { clipPath: "inset(6% 6% 6% 6%)", opacity: 0 },
    show: { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 },
  },
};
