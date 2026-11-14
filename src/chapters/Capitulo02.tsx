import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { DetailTrigger } from "../components/Dialog";
import type { DetailId } from "../content/details";
import type { PhotoKey } from "../content/media";
import { sources, type SourceId } from "../content/sources";

interface TimelineEvent {
  marker: string;
  when: string;
  title: string;
  text: string;
  detail?: DetailId;
  source?: SourceId;
  photo?: PhotoKey;
}

const events: TimelineEvent[] = [
  {
    marker: "Antes",
    when: "Antes da escravização",
    title: "Reinos, impérios e cidades na África",
    text: "Muito antes da colonização europeia, o continente africano abrigava reinos, impérios e cidades com governos, comércio, arte e saberes próprios, como o Império do Mali e o Reino do Congo.",
  },
  {
    marker: "XVI–XIX",
    when: "Séculos XVI a XIX",
    title: "Tráfico transatlântico",
    text: "Estima-se que cerca de 4,8 milhões de africanos tenham sido trazidos à força para o Brasil, algo como 40% de todo o tráfico transatlântico. Foram arrancados de suas famílias, comunidades e línguas, e muitos não sobreviveram à travessia.",
    source: "slave",
    photo: "navio_negreiro",
  },
  {
    marker: "XVI–XIX",
    when: "Séculos XVI a XIX",
    title: "Resistir também é existir",
    text: "Fugas, revoltas, irmandades religiosas, música, dança e capoeira foram formas de resistência. A liberdade era disputada todos os dias, dentro e fora das plantações.",
  },
  {
    marker: "1605–1694",
    when: "c. 1605 a 1694",
    title: "Quilombo dos Palmares",
    text: "Na Serra da Barriga, em Alagoas, formou-se Palmares: milhares de pessoas fugidas do cativeiro, com agricultura, comércio e governo próprio. Resistiu por décadas às expedições coloniais.",
    detail: "hist-palmares",
    photo: "serra_barriga",
  },
  {
    marker: "1695",
    when: "c. 1655 a 1695",
    title: "Zumbi dos Palmares",
    text: "Líder de Palmares, Zumbi organizou a defesa do quilombo contra sucessivas investidas. Foi morto em 20 de novembro de 1695, data que hoje lembra a resistência negra no Brasil.",
    detail: "hist-zumbi",
    photo: "zumbi_monument",
  },
  {
    marker: "XVII",
    when: "Século XVII",
    title: "Dandara dos Palmares",
    text: "Companheira de Zumbi, Dandara é lembrada como guerreira e estrategista. Os registros sobre sua vida são escassos, e por isso sua história pede cuidado ao ser contada.",
    detail: "hist-dandara",
  },
  {
    marker: "1888",
    when: "13 de maio de 1888",
    title: "Lei Áurea",
    text: "A escravização foi declarada extinta no Brasil, o último país das Américas a abolir o sistema. A lei não garantiu terra, moradia, trabalho nem escola às pessoas libertadas.",
    detail: "hist-lei-aurea",
    source: "lei_aurea",
  },
  {
    marker: "Depois",
    when: "Pós-abolição",
    title: "Liberdade sem reparação",
    text: "Sem políticas de inclusão, a desigualdade racial atravessou o século XX. A população negra foi empurrada para os trabalhos mais precários e as periferias, e a luta por direitos continuou nas ruas, nas escolas e nos sindicatos.",
  },
  {
    marker: "20/11",
    when: "20 de novembro",
    title: "Dia da Consciência Negra",
    text: "A data homenageia Zumbi e a resistência negra. Foi instituída como Dia Nacional de Zumbi e da Consciência Negra pela Lei 12.519/2011 e tornou-se feriado nacional pela Lei 14.759/2023.",
    source: "lei14759",
  },
];

/** Capítulo 02: linha do tempo equilibrada, com marcos à esquerda e narrativa à direita. */
export function Capitulo02() {
  return (
    <ChapterSection id="cap-02" index={1}>
      <ChapterHeader
        id="cap-02"
        number="02"
        kicker="História e resistência"
        title="Resistir também é fazer história."
        lead="Antes de qualquer lei, houve luta. Acompanhe a linha do tempo: cada marco aparece conforme você rola."
      />

      <ol className="mx-auto mt-24 max-w-[1360px] border-l border-olive/45 lg:border-l-2">
        {events.map((event, i) => (
          <li
            key={`${event.title}-${i}`}
            data-event={i}
            className={`relative grid min-h-[50dvh] gap-5 border-b border-cream/10 py-12 pl-6 first:border-t md:gap-8 md:pl-10 lg:min-h-[58dvh] lg:items-center lg:gap-14 lg:py-16 lg:pl-12 ${event.photo ? "lg:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.15fr)_minmax(15rem,1fr)]" : "lg:grid-cols-[minmax(15rem,0.38fr)_minmax(0,0.62fr)]"}`}
          >
            <div className="flex flex-col justify-center">
              <span aria-hidden="true" className="absolute -left-[5px] top-16 h-2 w-2 rounded-full bg-amber lg:top-1/2 lg:-translate-y-1/2" />
              <p className="font-display text-[clamp(2.5rem,5.8vw,6rem)] leading-none text-amber">{event.marker}</p>
              <p className="kicker mt-4">{event.when}</p>
            </div>

            <Reveal variant={i % 2 === 0 ? "up" : "lateral"} beat className="flex flex-col justify-center">
              <h3 className="font-display mt-2 text-[clamp(2rem,3.2vw,3.4rem)] leading-[1.08] text-cream">
                {event.title}
              </h3>
              <p className="mt-6 max-w-[60ch] text-[clamp(1.15rem,1.4vw,1.35rem)] leading-[1.65] text-cream">
                {event.text}
              </p>
              {event.source && (
                <p className="mt-4 max-w-[60ch] text-[0.95rem] leading-snug text-cream-dim">
                  Fonte: {sources[event.source].label}
                </p>
              )}
              {event.detail && (
                <div className="mt-8">
                  <DetailTrigger id={event.detail}>Abrir contexto</DetailTrigger>
                </div>
              )}
            </Reveal>
            {event.photo && (
              <Figure
                photo={event.photo}
                aspect={event.photo === "navio_negreiro" ? "aspect-[3/4]" : "aspect-[4/3]"}
                fit={event.photo === "navio_negreiro" ? "contain" : "cover"}
                parallax={event.photo !== "navio_negreiro"}
              />
            )}
          </li>
        ))}
      </ol>
    </ChapterSection>
  );
}
