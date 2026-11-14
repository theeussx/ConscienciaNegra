import type { SourceId } from "./sources";

export interface Stat {
  value: string;
  label: string;
  detail: string;
  source: SourceId;
  /** Proporção de 0 a 100, usada na barra comparativa. */
  ratio: number;
}

/** Números somente com fonte oficial verificada. */
export const stats: Stat[] = [
  {
    value: "55,5%",
    label: "da população brasileira se declarou preta ou parda no Censo 2022.",
    detail: "São mais de 112 milhões de pessoas. Pretos (10,2%) e pardos (45,3%) somados.",
    source: "ibge",
    ratio: 55.5,
  },
  {
    value: "77%",
    label: "das vítimas de homicídio em 2023 eram pessoas negras (pretas e pardas).",
    detail: "O índice foi de 76,97% no levantamento do Ipea e do Fórum Brasileiro de Segurança Pública.",
    source: "atlas",
    ratio: 77,
  },
];

export interface LegalMilestone {
  year: string;
  title: string;
  text: string;
  source: SourceId;
}

/** Marcos legais citados no capítulo. */
export const legalMilestones: LegalMilestone[] = [
  {
    year: "1989",
    title: "Lei Caó",
    text: "Define como crime o preconceito de raça ou de cor.",
    source: "lei7716",
  },
  {
    year: "2003",
    title: "Lei 10.639",
    text: "Torna obrigatório o ensino de história e cultura afro-brasileira nas escolas.",
    source: "lei10639",
  },
  {
    year: "2012",
    title: "Reserva de vagas",
    text: "Garante cotas para pretos, pardos e indígenas nas instituições federais de ensino.",
    source: "lei12711",
  },
  {
    year: "2023",
    title: "Feriado nacional",
    text: "O 20 de novembro se torna feriado nacional a partir de 2024.",
    source: "lei14759",
  },
];
