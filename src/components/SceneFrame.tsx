import type { ReactNode } from "react";
import { motion, useIsPresent } from "motion/react";
import { sceneTransition } from "../animations/transitions";
import type { Layout } from "../types/content";

export function SceneFrame({
  reduced,
  layout,
  revealStep = 99,
  children,
}: {
  reduced: boolean;
  layout: Layout;
  revealStep?: number;
  children: ReactNode;
}) {
  const present = useIsPresent();
  return (
    <motion.div
      className={`scene-container${present ? "" : " is-exiting"}`}
      data-reveal-step={revealStep}
      aria-hidden={!present}
      inert={!present}
      {...sceneTransition(reduced, layout)}
    >
      {children}
    </motion.div>
  );
}
