import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";

/** Capítulo 08: encerramento em três frases, sem excesso de animação, com transição para os participantes. */
export function Capitulo08() {
  return (
    <ChapterSection id="cap-08" index={7} className="overflow-hidden">
      <ChapterHeader id="cap-08" number="08" kicker="Encerramento" title="O futuro também tem raízes." />

      <div className="mx-auto mt-24 max-w-[1480px] space-y-20">
        <Reveal variant="mask" beat dur={0.9}>
          <p className="font-display text-[clamp(2.2rem,4.4vw,4.6rem)] leading-[1.1] text-cream">
            Conhecer a história é reconhecer o passado.
          </p>
        </Reveal>
        <Reveal variant="mask" beat dur={0.9} className="lg:ml-[18%]">
          <p className="font-display text-[clamp(2.2rem,4.4vw,4.6rem)] leading-[1.1] text-cream">
            Respeitar as diferenças é transformar o presente.
          </p>
        </Reveal>
        <Reveal variant="mask" beat dur={0.9} className="lg:ml-[36%]">
          <p className="font-display text-[clamp(2.2rem,4.4vw,4.6rem)] leading-[1.1] text-terracotta">
            Combater o racismo é construir o futuro.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-32 grid max-w-[1480px] items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <Figure photo="parade" aspect="aspect-[16/9]" reveal="photo" />
        </div>
        <Reveal variant="up" beat className="lg:col-span-4">
          <p className="text-[1.25rem] leading-[1.6] text-cream-dim">
            O futuro é coletivo. Ele depende de escolas, famílias, clubes, artistas, trabalhadores e de cada pessoa que
            escolhe não se calar.
          </p>
          <a href="#cap-09" className="detail-trigger mt-8">
            Conheça quem fez acontecer
          </a>
        </Reveal>
      </div>
    </ChapterSection>
  );
}
