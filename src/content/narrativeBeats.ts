export type NarrativeBeatKind = "text" | "image" | "context" | "interactive" | "reflection";

export interface NarrativeBeatConfig {
  id: string;
  kind: NarrativeBeatKind;
  direction?: "up" | "left" | "right";
  duration?: number;
  threshold?: number;
  delay?: number;
}

const define = (...beats: NarrativeBeatConfig[]) => beats;

/** Stable narrative milestones; presentation order is authored here, not inferred from DOM shape. */
export const narrativeBeats: Record<string, NarrativeBeatConfig[]> = {
  abertura: define(
    { id: "abertura-title", kind: "text", direction: "up", duration: 0.72 },
    { id: "abertura-invitation", kind: "context", delay: 0.08 },
  ),
  africas: define(
    { id: "africas-title", kind: "text", direction: "left" },
    { id: "africas-context", kind: "context", delay: 0.08 },
  ),
  trajetorias: define(
    { id: "trajetorias-title", kind: "text", direction: "left" },
    { id: "trajetorias-timeline", kind: "interactive", threshold: 0.08 },
  ),
  cultura: define(
    { id: "cultura-title", kind: "text", direction: "left" },
    { id: "cultura-mural", kind: "image", threshold: 0.08 },
  ),
  sabores: define(
    { id: "sabores-title", kind: "text", direction: "left" },
    { id: "sabores-prato", kind: "image", threshold: 0.08 },
    { id: "sabores-selecao", kind: "interactive" },
  ),
  "balotelli-jogador": define(
    { id: "balotelli-jogador-title", kind: "text", direction: "left", duration: 0.72 },
    { id: "balotelli-jogador-portrait", kind: "image", threshold: 0.08 },
  ),
  "balotelli-verona": define(
    { id: "balotelli-verona-date", kind: "text", direction: "left" },
    { id: "balotelli-verona-context", kind: "context", delay: 0.08 },
  ),
  "balotelli-reacao": define(
    { id: "balotelli-reacao-title", kind: "text", direction: "left" },
    { id: "balotelli-reacao-timeline", kind: "interactive", threshold: 0.08 },
    { id: "balotelli-reacao-response", kind: "context" },
  ),
  "balotelli-reflexao": define(
    { id: "balotelli-reflexao-question", kind: "reflection", duration: 0.72 },
  ),
  "outros-atletas": define(
    { id: "outros-atletas-title", kind: "text", direction: "left" },
    { id: "outros-atletas-cases", kind: "interactive", threshold: 0.08 },
  ),
  protagonistas: define(
    { id: "protagonistas-title", kind: "text", direction: "left" },
    { id: "protagonistas-retratos", kind: "image", threshold: 0.08 },
  ),
  presente: define(
    { id: "presente-title", kind: "text", direction: "left" },
    { id: "presente-acoes", kind: "interactive", threshold: 0.08 },
    { id: "presente-transicao", kind: "reflection" },
  ),
  encerramento: define(
    { id: "encerramento-title", kind: "reflection", duration: 0.72 },
    { id: "encerramento-context", kind: "context" },
    { id: "encerramento-credito", kind: "context" },
  ),
  participantes: define(
    { id: "participantes-title", kind: "text", direction: "left" },
    { id: "participantes-context", kind: "context" },
    { id: "participantes-equipe", kind: "interactive", threshold: 0.08 },
  ),
};

export function getNarrativeBeat(sceneId: string, beatId: string) {
  return narrativeBeats[sceneId]?.find((beat) => beat.id === beatId);
}

export function getNarrativeBeatById(id: string) {
  for (const beats of Object.values(narrativeBeats)) {
    const beat = beats.find((candidate) => candidate.id === id);
    if (beat) return beat;
  }
}
