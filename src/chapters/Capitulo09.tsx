import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { participants } from "../content/participants";
import { photos } from "../content/media";
import { sources } from "../content/sources";

/** Capítulo 09: participantes com placeholders até a entrega dos dados reais, e créditos finais. */
export function Capitulo09() {
  const photoCredits = Array.from(
    new Map(
      Object.values(photos)
        .filter((photo) => photo !== undefined)
        .map((photo) => [`${photo.source}:${photo.author}`, photo]),
    ).values(),
  );

  return (
    <ChapterSection id="cap-09" index={8}>
      <ChapterHeader
        id="cap-09"
        number="09"
        kicker="Participantes"
        title="Quem fez acontecer."
        lead="Cada participante contribuiu para esta experiência. Os dados abaixo são provisórios: substitua os placeholders em src/content/participants.ts."
      />

      <ul className="mx-auto mt-24 grid max-w-[1480px] gap-x-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {participants.map((participant, i) => (
          <li key={participant.id}>
            <Reveal variant="up" delay={(i % 3) * 0.08} beat>
              {participant.photo ? (
                <Figure photo={participant.photo} aspect="aspect-[4/5]" reveal="mask" />
              ) : (
                <div className="flex aspect-[4/5] flex-col justify-between border-t-2 border-olive bg-surface p-8">
                  <span className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.05rem] text-cream-dim">Foto a incluir</span>
                </div>
              )}
              <h3 className="font-display mt-6 text-[clamp(1.7rem,2.4vw,2.4rem)] leading-tight text-cream">
                {participant.name}
              </h3>
              <p className="mt-2 text-[1.15rem] text-amber">{participant.role}</p>
              {participant.description && (
                <p className="mt-3 text-[1.1rem] leading-[1.55] text-cream-dim">{participant.description}</p>
              )}
            </Reveal>
          </li>
        ))}
      </ul>

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
            Verificação: fatos, datas e números foram conferidos em reportagens (BBC, Reuters, AP, EFE, CNN e The
            Guardian) e em documentos oficiais (IBGE, Ipea e Fórum Brasileiro de Segurança Pública, Planalto e IPHAN).
            Revise antes de cada apresentação.
          </p>
          <p className="mt-4 text-[1rem] leading-relaxed text-cream-dim">
            RAÍZES — Além da cor · Apresentação escolar. Imagens, fontes e textos estão incorporados ao arquivo e
            funcionam sem internet.
          </p>
        </section>
      </footer>
    </ChapterSection>
  );
}
