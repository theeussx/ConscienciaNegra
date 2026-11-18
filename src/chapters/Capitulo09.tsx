import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ChapterHeader, ChapterSection, Reveal } from "../components/Narrative";
import { ModalShell } from "../components/Dialog";
import { participants, type Participant } from "../content/participants";
import { photos } from "../content/media";
import { sources } from "../content/sources";
import mateusScript from "../../ROTEIRO_MATEUS.md?raw";

function ParticipantPhoto({ participant, number }: { participant: Participant; number: number }) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (participant.photo && participant.photo !== failedSource) {
    return (
      <div className="aspect-[4/5] overflow-hidden border border-cream/15 bg-surface">
        <img
          src={participant.photo}
          alt={participant.photoAlt || `Retrato de ${participant.name}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: participant.photoPosition || "center" }}
          onError={() => setFailedSource(participant.photo ?? null)}
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/5] flex-col justify-between border-t-2 border-olive bg-surface p-8">
      <span className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none text-amber">{String(number).padStart(2, "0")}</span>
      <span className="text-[1.05rem] text-cream-dim">Foto a incluir</span>
    </div>
  );
}

/** Capítulo 09: participantes com placeholders até a entrega dos dados reais, e créditos finais. */
export function Capitulo09() {
  const [scriptOpen, setScriptOpen] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  const photoCredits = Array.from(
    new Map(
      Object.values(photos)
        .filter((photo) => photo !== undefined)
        .map((photo) => [`${photo.source}:${photo.author}`, photo]),
    ).values(),
  );

  useEffect(() => {
    if (!scriptOpen) return;
    document.documentElement.classList.add("dialog-open");
    return () => document.documentElement.classList.remove("dialog-open");
  }, [scriptOpen]);

  return (
    <ChapterSection id="cap-09" index={8}>
      <ChapterHeader
        id="cap-09"
        number="09"
        kicker="Participantes"
        title="Quem fez acontecer."
        lead="Cada participante que contribuiu para esta experiência."
      />

      <ul className="mx-auto mt-24 grid max-w-[1480px] gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {participants.map((participant, i) => (
          <li key={participant.id}>
            <Reveal variant="up" delay={(i % 3) * 0.08} beat>
              <ParticipantPhoto participant={participant} number={i + 1} />
              <h3 className="font-display mt-6 text-[clamp(1.7rem,2.4vw,2.4rem)] leading-tight text-cream">
                {participant.name === "Mateus Henrique" ? (
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-label="Clique três vezes para abrir o roteiro secreto de Mateus Henrique"
                    onClick={() => {
                      const nextClickCount = nameClicks + 1;
                      if (nextClickCount === 3) {
                        setNameClicks(0);
                        setScriptOpen(true);
                      } else {
                        setNameClicks(nextClickCount);
                      }
                    }}
                    className="cursor-text text-left"
                  >
                    {participant.name}
                  </button>
                ) : (
                  participant.name
                )}
              </h3>
              <p className="mt-2 text-[1.15rem] text-amber">{participant.role}</p>
              {participant.description && (
                <p className="mt-3 text-[1.1rem] leading-[1.55] text-cream-dim">{participant.description}</p>
              )}
              {participant.portfolioUrl && (
                <a
                  href={participant.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center border border-amber px-5 py-2 text-base font-semibold text-amber transition-colors hover:bg-amber hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
                >
                  Ver portfólio <span aria-hidden="true" className="ml-2">↗</span>
                  <span className="sr-only"> de {participant.name} (abre em nova aba)</span>
                </a>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {scriptOpen && (
          <ModalShell key="mateus-script" labelledBy="mateus-script-title" onClose={() => setScriptOpen(false)}>
            <div className="flex min-h-full flex-col gap-8 px-6 py-8 md:px-12 md:py-12">
              <div className="flex items-start justify-between gap-6">
                <p className="kicker max-w-[36ch]">Material de apresentação</p>
                <button
                  type="button"
                  data-autofocus=""
                  onClick={() => setScriptOpen(false)}
                  className="btn shrink-0"
                >
                  Fechar
                </button>
              </div>
              <h2
                id="mateus-script-title"
                className="font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] text-cream"
              >
                Roteiro de Mateus Henrique
              </h2>
              <div className="max-w-[62ch] space-y-5 text-[1.15rem] leading-[1.7] text-cream">
                {mateusScript.trim().split(/\n\s*\n/).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </ModalShell>
        )}
      </AnimatePresence>

      <footer className="mx-auto mt-40 grid max-w-[1480px] gap-14 border-t border-cream/15 pt-14 lg:grid-cols-2">
        <section aria-labelledby="fontes-finais">
          <h3 id="fontes-finais" className="kicker">
            Referências e fontes
          </h3>
          <ul className="mt-5 space-y-3 text-[1rem] leading-snug text-cream-dim">
            {Object.values(sources).map((source) => (
              <li key={source.url + source.label}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-terracotta underline-offset-4 hover:text-amber"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="creditos-finais">
          <h3 id="creditos-finais" className="kicker">
            Créditos das imagens
          </h3>
          <ul className="mt-5 space-y-3 text-[1rem] leading-snug text-cream-dim">
            {photoCredits.map((photo) => (
              <li key={`${photo.source}:${photo.author}`}>
                Foto: {photo.author} · {photo.license} ·{" "}
                <a href={photo.source} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  origem
                </a>{" "}
                ·{" "}
                <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  licença
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[1rem] leading-relaxed text-cream-dim">
            Verificação: consulte as referências acima para conferir o contexto e a data dos dados. Revise informações e links antes de cada apresentação.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-cream-dim">
            RAÍZES — Além da cor · Apresentação escolar. Textos e imagens estão incorporados; links para fontes externas requerem internet.
          </p>
        </section>
      </footer>
    </ChapterSection>
  );
}
