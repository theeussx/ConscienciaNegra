import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = { children: ReactNode; direction?: "up" | "left" | "right"; distance?: number; duration?: number; delay?: number; threshold?: number; once?: boolean; className?: string; narrativeBeat?: string; beatKind?: string };
export function ScrollReveal({ children, direction = "up", distance = 24, duration = .55, delay = 0, threshold = .18, once = true, className, narrativeBeat, beatKind }: Props) {
  const reduced = useReducedMotion();
  const offset = direction === "left" ? { x: -distance } : direction === "right" ? { x: distance } : { y: distance };
  return <motion.div className={className} data-narrative-beat={narrativeBeat} data-beat-kind={beatKind} initial={reduced ? false : { opacity: 0, ...offset }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once, amount: threshold }} transition={{ duration: reduced ? 0 : duration, delay: reduced ? 0 : delay, ease: [.22,.7,.2,1] }}>{children}</motion.div>;
}
