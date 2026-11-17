import { ChapterHeader, ChapterSection, Figure, Reveal } from "../components/Narrative";
import { DetailTrigger } from "../components/Dialog";
import type { DetailId } from "../content/details";
import type { PhotoKey } from "../content/media";

interface Dish {
  id: DetailId;
  name: string;
  summary: string;
  ingredients: string;
  photo: PhotoKey;
}

const dishes: Dish[] = [
  {
    id: "food-acaraje",
    name: "Acarajé",
    summary: "Bolinho de feijão-fradinho frito no azeite de dendê, que pode ser servido com vatapá, caruru e camarão seco.",
    ingredients: "Feijão-fradinho, cebola, sal e azeite de dendê.",
    photo: "acaraje",
  },
  {
    id: "food-vatapa",
    name: "Vatapá",
    summary: "Creme que pode levar pão ou farinha, leite de coco, amendoim, castanha-de-caju e camarão.",
    ingredients: "Pão ou farinha, leite de coco, dendê e camarão.",
    photo: "vatapa",
  },
  {
    id: "food-caruru",
    name: "Caruru",
    summary: "Quiabo refogado com camarão seco, dendê e castanha, tradicional nas festas de Cosme e Damião.",
    ingredients: "Quiabo, camarão seco, dendê e amendoim.",
    photo: "caruru",
  },
  {
    id: "food-abara",
    name: "Abará",
    summary: "Bolinho de feijão-fradinho cozido no vapor e envolto em folhas. Não é frito.",
    ingredients: "Feijão-fradinho, dendê e folhas para envolver.",
    photo: "abara",
  },
];

/** Capítulo 04: composição editorial gastronômica, com linhas alternadas e fotografias em destaque. */
export function Capitulo04() {
  return (
    <ChapterSection id="cap-04" index={3}>
      <ChapterHeader
        id="cap-04"
        number="04"
        kicker="Culinária"
        title="Sabores que contam histórias."
        lead="Cada prato guarda ingredientes trazidos, técnicas recriadas e sabores reinventados."
      />

      <div className="mx-auto mt-24 grid max-w-[1480px] items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Figure photo="vatapa" aspect="aspect-[16/10]" reveal="photo" />
        </div>
        <Reveal variant="lateral" delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <p className="font-display text-[clamp(1.7rem,2.4vw,2.4rem)] leading-[1.25] text-cream">
            Quatro pratos baianos que expressam encontros entre tradições e ingredientes. O acarajé é um deles,
            mas vatapá, caruru e abará completam o tabuleiro.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-40 flex max-w-[1480px] flex-col gap-40">
        {dishes.map((dish, i) => {
          const textFirst = i % 2 === 1;
          return (
            <div key={dish.id} className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
              <div className={textFirst ? "lg:order-2 lg:col-span-6 lg:col-start-7" : "lg:col-span-6"}>
                <Figure photo={dish.photo} aspect="aspect-[4/3]" reveal={textFirst ? "lateral" : "mask"} />
              </div>
              <Reveal variant="up" beat className={textFirst ? "lg:order-1 lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"}>
                <p className="kicker">Prato {String(i + 1).padStart(2, "0")} · Bahia</p>
                <h3 className="font-display mt-4 text-[clamp(2.6rem,4.6vw,4.8rem)] leading-[1] text-cream">{dish.name}</h3>
                <p className="mt-6 text-[clamp(1.15rem,1.4vw,1.35rem)] leading-[1.6] text-cream">{dish.summary}</p>
                <p className="mt-4 text-[1.05rem] leading-snug text-cream-dim">
                  <span className="font-bold text-amber">Ingredientes: </span>
                  {dish.ingredients}
                </p>
                <div className="mt-8">
                  <DetailTrigger id={dish.id}>Abrir a história do prato</DetailTrigger>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <Reveal variant="mask" beat dur={0.9} className="mx-auto mt-40 max-w-[1100px] border-l-2 border-terracotta pl-8">
        <p className="font-display text-[clamp(2rem,3.8vw,3.8rem)] leading-[1.12] text-cream">
          Cada prato é uma aula de história: ingredientes trazidos, técnicas recriadas e sabores que resistiram.
        </p>
      </Reveal>
    </ChapterSection>
  );
}
