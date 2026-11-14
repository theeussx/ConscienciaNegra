import { ChapterSection, Figure, Reveal, Words } from "../components/Narrative";

/** Capítulo 01: abertura cinematográfica, sem CTA comercial. */
export function Capitulo01() {
  return (
    <>
      <ChapterSection id="cap-01" index={0} className="flex min-h-[100svh] items-center pb-28 pt-20 md:pt-24">
        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal variant="fade">
              <p className="kicker">Capítulo 01</p>
            </Reveal>
            <Reveal variant="lateral" delay={0.1} className="mt-6">
              <h1 className="font-display text-[clamp(3.6rem,9vw,8.6rem)] leading-[0.92] tracking-[-0.02em] text-cream">
                RAÍZES
              </h1>
            </Reveal>
            <Reveal variant="fade" delay={0.25} className="mt-4">
              <p className="text-[clamp(1.05rem,1.5vw,1.45rem)] font-bold uppercase tracking-[0.32em] text-terracotta">
                Além da cor
              </p>
            </Reveal>
            <h2
              id="cap-01-title"
              tabIndex={-1}
              data-beat=""
              className="font-display mt-14 max-w-[16ch] text-[clamp(2.4rem,4.4vw,4.6rem)] leading-[1.04] text-cream focus:outline-none"
            >
              <Words text="Uma história que vive em nós." delay={0.2} />
            </h2>
            <Reveal variant="up" delay={0.15} className="mt-8 max-w-[44ch]">
              <p className="text-[clamp(1.2rem,1.5vw,1.5rem)] leading-[1.6] text-cream-dim">
                Uma história de identidade, cultura, resistência e humanidade.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Figure photo="hero" aspect="aspect-[4/5]" reveal="photo" />
          </div>
        </div>
      </ChapterSection>

      <div className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-10 lg:col-span-6">
              <Reveal variant="up" beat>
                <p className="font-display text-[clamp(1.7rem,2.6vw,2.6rem)] leading-[1.25] text-cream">
                  O Dia da Consciência Negra, 20 de novembro, convida a olhar a história da população negra a partir de
                  quem a viveu, resistiu e criou.
                </p>
              </Reveal>
              <Reveal variant="up" delay={0.1}>
                <p className="max-w-[52ch] text-[clamp(1.15rem,1.4vw,1.35rem)] leading-[1.65] text-cream-dim">
                  Consciência Negra é a compreensão de que o racismo é um problema coletivo e de que a história, a
                  cultura e a identidade negras merecem lugar central na vida do país. A data homenageia Zumbi dos
                  Palmares, morto em 20 de novembro de 1695.
                </p>
              </Reveal>
            </div>
            <div className="space-y-12 lg:col-span-5 lg:col-start-8">
              <Reveal variant="lateral" beat>
                <p className="font-display text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.08]">
                  Não começa com a escravização.
                </p>
              </Reveal>
              <Reveal variant="lateral" beat delay={0.05}>
                <p className="font-display text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.08]">
                  Não termina com a abolição.
                </p>
              </Reveal>
              <Reveal variant="lateral" beat delay={0.1}>
                <p className="font-display text-[clamp(2rem,3.4vw,3.4rem)] leading-[1.08] text-amber">
                  Vive na cultura, na política, na ciência e no cotidiano.
                </p>
              </Reveal>
            </div>
          </div>
          <Reveal variant="scale" beat className="mt-28 border-t border-cream/15 pt-16">
            <p className="font-display text-[clamp(2.4rem,5vw,5.2rem)] leading-[1] text-cream">
              Vamos começar pelo <em className="text-terracotta">princípio.</em>
            </p>
          </Reveal>
        </div>
      </div>
    </>
  );
}
