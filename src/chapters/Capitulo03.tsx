import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { DetailTrigger } from "../components/Dialog";
import type { DetailId } from "../content/details";
import type { PhotoKey } from "../content/media";

interface Station {
  id: DetailId;
  place: string;
  title: string;
  text: string;
  photo?: PhotoKey;
  photoAspect?: string;
}

const stations: Station[] = [
  {
    id: "cult-maracatu",
    place: "Pernambuco",
    title: "Maracatu",
    text: "Cortejo de coroação que se tornou uma das principais expressões afro-pernambucanas, com batuques, calungas e estandartes.",
    photo: "maracatu",
  },
  {
    id: "cult-capoeira",
    place: "Brasil",
    title: "Capoeira",
    text: "Luta, dança e música formadas em meio à escravização. Na roda, o berimbau comanda o jogo.",
    photo: "capoeira",
  },
  {
    id: "cult-samba",
    place: "Bahia e Rio de Janeiro",
    title: "Samba",
    text: "Do samba de roda do Recôncavo às rodas urbanas, a música carrega a herança do semba e da umbigada.",
    photo: "samba",
  },
  {
    id: "cult-jongo",
    place: "Sudeste",
    title: "Jongo",
    text: "Canto e dança de origem bantu, com pontos cantados em forma de desafio e o tambor do caxambu.",
    photo: "jongo",
    photoAspect: "aspect-[16/9]",
  },
  {
    id: "cult-religioes",
    place: "Brasil",
    title: "Religiosidades de matriz africana",
    text: "Candomblé, umbanda e outras tradições preservam nomes, cantos e práticas recriados no Brasil.",
  },
  {
    id: "cult-linguagem",
    place: "Português do Brasil",
    title: "Palavras que vieram da África",
    text: "Cafuné, quitanda, moleque e samba mostram que a língua que falamos também é africana.",
  },
];

function StationCard({ station, number }: { station: Station; number: string }) {
  return (
    <article>
      {station.photo ? (
        <Figure photo={station.photo} aspect={station.photoAspect ?? "aspect-[4/5]"} reveal="mask" />
      ) : (
        <Reveal variant="mask" dur={0.9}>
          <div className="flex aspect-[4/5] flex-col justify-between border-t-2 border-olive bg-surface p-8">
            <span className="font-display text-[clamp(4rem,8vw,7rem)] leading-none text-olive">{number}</span>
            <span className="kicker text-cream-dim">Tradição viva</span>
          </div>
        </Reveal>
      )}
      <Reveal variant="up" beat className="mt-6">
        <p className="kicker">
          Estação {number} · {station.place}
        </p>
        <h3 className="font-display mt-3 text-[clamp(2rem,3vw,3rem)] leading-[1.08] text-cream">{station.title}</h3>
        <p className="mt-4 max-w-[46ch] text-[1.2rem] leading-[1.6] text-cream-dim">{station.text}</p>
        <div className="mt-6">
          <DetailTrigger id={station.id}>Abrir a contextualização</DetailTrigger>
        </div>
      </Reveal>
    </article>
  );
}

/** Capítulo 03: estações interativas em composição escalonada, com destaque para Pernambuco. */
export function Capitulo03() {
  const numbered = stations.map((station, i) => ({ station, number: String(i + 1).padStart(2, "0") }));
  const left = numbered.filter((_, i) => i % 2 === 0);
  const right = numbered.filter((_, i) => i % 2 === 1);

  return (
    <ChapterSection id="cap-03" index={2}>
      <div
        role="group"
        aria-label="Maracatu, capoeira e samba: tradições culturais afro-brasileiras"
        className="-mx-6 -mt-24 mb-20 grid grid-cols-2 gap-2 md:-mx-12 md:-mt-32 md:mb-28 lg:-mx-20 lg:grid-cols-12"
      >
        <Figure
          photo="maracatu"
          aspect="aspect-[16/9] md:aspect-[4/3]"
          className="col-span-2 md:col-span-1 lg:col-span-5"
          reveal="photo"
          parallax={false}
        />
        <Figure
          photo="capoeira"
          aspect="aspect-[4/3]"
          className="lg:col-span-3"
          reveal="photo"
          parallax={false}
        />
        <Figure
          photo="samba"
          aspect="aspect-[4/3]"
          className="lg:col-span-4"
          reveal="photo"
          parallax={false}
        />
      </div>
      <ChapterHeader
        id="cap-03"
        number="03"
        kicker="Cultura afro-brasileira"
        title="A África que vive no Brasil."
        lead="A África não é um país: é um continente com centenas de povos, línguas e tradições. Por isso, cada manifestação tem origens próprias. Abra uma estação para conhecer sua história."
      />
      <div className="mx-auto mt-24 grid max-w-[1480px] gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-24 lg:col-span-6">
          {left.map(({ station, number }) => (
            <StationCard key={station.id} station={station} number={number} />
          ))}
        </div>
        <div className="flex flex-col gap-24 lg:col-span-6">
          {right.map(({ station, number }) => (
            <StationCard key={station.id} station={station} number={number} />
          ))}
        </div>
      </div>
    </ChapterSection>
  );
}
