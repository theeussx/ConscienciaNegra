import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { DetailTrigger } from "../components/Dialog";
import type { DetailId } from "../content/details";
import type { PhotoKey } from "../content/media";

interface Person {
  id: DetailId;
  photo: PhotoKey;
  name: string;
  role: string;
  aspect: string;
}

const people: Person[] = [
  {
    id: "pess-machado",
    photo: "machado",
    name: "Machado de Assis",
    role: "Romancista e contista, fundador da Academia Brasileira de Letras.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "pess-carolina",
    photo: "carolina",
    name: "Carolina Maria de Jesus",
    role: "Escritora e autora de Quarto de despejo, publicado em 1960.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "pess-luiz-gama",
    photo: "luiz_gama",
    name: "Luiz Gama",
    role: "Advogado autodidata e abolicionista, que libertou centenas de pessoas pela via judicial.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "pess-milton",
    photo: "milton_santos",
    name: "Milton Santos",
    role: "Geógrafo baiano, pensador do espaço e da globalização.",
    aspect: "aspect-[3/4]",
  },
  {
    id: "pess-conceicao",
    photo: "conceicao",
    name: "Conceição Evaristo",
    role: "Escritora mineira e criadora do conceito de escrevivência.",
    aspect: "aspect-[4/3]",
  },
  {
    id: "pess-pele",
    photo: "pele",
    name: "Pelé",
    role: "Tricampeão mundial de futebol pela seleção brasileira.",
    aspect: "aspect-[4/3]",
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <article>
      <Figure photo={person.photo} aspect={person.aspect} reveal="mask" />
      <Reveal variant="up" beat className="mt-8">
        <h3 className="font-display text-[clamp(2rem,3vw,3.2rem)] leading-[1.06] text-cream">{person.name}</h3>
        <p className="mt-3 max-w-[40ch] text-[1.15rem] leading-[1.55] text-cream-dim">{person.role}</p>
        <div className="mt-6">
          <DetailTrigger id={person.id}>Abrir biografia</DetailTrigger>
        </div>
      </Reveal>
    </article>
  );
}

/** Capítulo 06: retratos em composição editorial assimétrica, sem grade de cartões repetidos. */
export function Capitulo06() {
  const [machado, carolina, gama, milton, conceicao, pele] = people;
  return (
    <ChapterSection id="cap-06" index={5}>
      <ChapterHeader
        id="cap-06"
        number="06"
        kicker="Protagonismo negro"
        title="Não apenas resistiram. Transformaram o mundo."
        lead="Esses nomes atravessaram séculos de censura e preconceito. Cada um mudou a forma como o Brasil pensa a si mesmo."
      />

      <div className="mx-auto mt-24 flex max-w-[1480px] flex-col gap-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:col-start-1">
            <PersonCard person={machado} />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:mt-40">
            <PersonCard person={carolina} />
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:col-start-2">
            <PersonCard person={gama} />
          </div>
          <div className="lg:col-span-4 lg:col-start-8 lg:mt-32">
            <PersonCard person={milton} />
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5 lg:col-start-1">
            <PersonCard person={conceicao} />
          </div>
          <div className="lg:col-span-5 lg:col-start-8 lg:mt-32">
            <PersonCard person={pele} />
          </div>
        </div>
      </div>
    </ChapterSection>
  );
}
