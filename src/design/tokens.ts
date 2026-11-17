import type { Variants } from "motion/react";

/** Paleta de cores da aplicação, consumida pelo tema global. */
export const palette = {
  ink: "#000000",
  surface: "#000000",
  cream: "#ffffff",
  creamDim: "#ffffff",
  terracotta: "#B22222",
  olive: "#B3BD8A",
  amber: "#D4AF37 ",
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
  mask: { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.97 }, show: { opacity: 1, scale: 1 } },
  photo: {
    hidden: { opacity: 0, scale: 0.985 },
    show: { opacity: 1, scale: 1 },
  },
};
