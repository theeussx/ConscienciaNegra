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
    value: "77,1%",
    label: "das vítimas de homicídio em 2024 eram pessoas negras (pretas e pardas).",
    detail: "Cálculo aproximado: 32.820 vítimas negras entre 42.590 homicídios registrados, segundo o Atlas da Violência 2026.",
    source: "atlas",
    ratio: 77.1,
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
    text: "Reserva vagas nas instituições federais de ensino para estudantes de escolas públicas, com critérios que incluem renda, raça e deficiência, conforme a legislação vigente.",
    source: "lei12711",
  },
  {
    year: "2023",
    title: "Feriado nacional",
    text: "O 20 de novembro se torna feriado nacional a partir de 2024.",
    source: "lei14759",
  },
];
