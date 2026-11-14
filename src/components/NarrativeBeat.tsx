import type { ReactNode } from "react";
import { getNarrativeBeatById } from "../content/narrativeBeats";
import { ScrollReveal } from "./ScrollReveal";

export function NarrativeBeat({
  id,
  children,
  className,
  delay,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const beat = getNarrativeBeatById(id);
  return (
    <ScrollReveal
      className={`narrative-beat narrative-beat--${beat?.kind ?? "detail"}${className ? ` ${className}` : ""}`}
      narrativeBeat={id}
      beatKind={beat?.kind}
      direction={beat?.direction ?? "up"}
      duration={beat?.duration ?? 0.56}
      delay={delay ?? beat?.delay ?? 0}
      threshold={beat?.threshold ?? 0.16}
    >
      {children}
    </ScrollReveal>
  );
}
