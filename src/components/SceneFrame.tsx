import type { ReactNode } from "react";
import { motion, useIsPresent } from "motion/react";
import { sceneTransition } from "../animations/transitions";
import type { Layout } from "../types/content";

export function SceneFrame({
  reduced,
  layout,
  children,
}: {
  reduced: boolean;
  layout: Layout;
  children: ReactNode;
}) {
  const present = useIsPresent();
  return (
    <motion.div
      className={`scene-container${present ? "" : " is-exiting"}`}
      aria-hidden={!present}
      inert={!present}
      {...sceneTransition(reduced, layout)}
    >
      {children}
    </motion.div>
  );
}
