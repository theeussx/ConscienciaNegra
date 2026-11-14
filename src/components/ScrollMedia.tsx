import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

export function ScrollMedia({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], ["-3.5%", "3.5%"]);
  const y = useSpring(rawY, { stiffness: 90, damping: 26, mass: 0.4 });

  return (
    <div ref={ref} className={`scroll-media ${className}`}>
      <motion.div className="scroll-media__inner" style={reduced ? undefined : { y }}>
        {children}
      </motion.div>
    </div>
  );
}
