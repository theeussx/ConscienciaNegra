/**
 * Registro central de fontes. Cada dado com número, data ou afirmação factual
 * deve apontar para uma destas entradas.
 */
export const sources = {
  bbc1: {
    label: "BBC Sport, 3 nov. 2019: Hellas Verona 2-1 Brescia, Balotelli ameaça deixar o campo",
    url: "https://www.bbc.com/sport/football/50281847",
  },
  bbc2: {
    label: "BBC Sport, nov. 2019: Verona punido com fechamento parcial do estádio",
    url: "https://www.bbc.com/sport/football/50299720",
  },
  reuters: {
    label: "Reuters, publicada pela Euronews, 3 nov. 2019",
    url: "https://www.euronews.com/2019/11/03/balotelli-threatens-to-walk-off-over-racist-abuse-in-verona",
  },
  guardian_vini: {
    label: "The Guardian, 23 mai. 2023: prisões e denúncias sobre Vinícius Júnior",
    url: "https://www.theguardian.com/world/2023/may/23/spanish-police-arrest-four-people-over-vinicius-junior-effigy",
  },
  ap_vini: {
    label: "Associated Press, 23 mai. 2023: prisões e fechamento parcial do Mestalla",
    url: "https://www.newsday.com/sports/soccer/4-people-arrested-on-suspicion-of-hanging-vinicius-junior-effigy-off-bridge-wtzyo59l",
  },
  efe_vini: {
    label: "Agência EFE, 23 mai. 2023: três detidos em Valência",
    url: "https://efe.com/en/sports/2023-05-23/three-arrests-over-alleged-racist-incident-in-spanish-soccer-stadium/",
  },
  cnn_rich: {
    label: "CNN, 28 set. 2022: banana atirada contra Richarlison em Paris",
    url: "https://www.cnn.com/2022/09/28/football/racism-richarlison-brazil-tunisia-tottenham-football-spt-intl",
  },
  bbc_rich: {
    label: "BBC Sport, 28 set. 2022: Richarlison e a banana atirada em campo",
    url: "https://www.bbc.com/sport/football/63056129",
  },
  ibge: {
    label: "IBGE, Censo Demográfico 2022 (cor ou raça), divulgado em dez. 2023",
    url: "https://censo2022.ibge.gov.br/",
  },
  atlas: {
    label: "Atlas da Violência 2025, Ipea e Fórum Brasileiro de Segurança Pública (dados de 2023)",
    url: "https://www.ipea.gov.br/atlasviolencia/",
  },
  lei7716: {
    label: "Lei nº 7.716, de 5 de janeiro de 1989 (Lei Caó)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l7716.htm",
  },
  lei10639: {
    label: "Lei nº 10.639, de 9 de janeiro de 2003",
    url: "https://www.planalto.gov.br/ccivil_03/leis/2003/L10.639.htm",
  },
  lei12711: {
    label: "Lei nº 12.711, de 29 de agosto de 2012 (reserva de vagas)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12711.htm",
  },
  lei12519: {
    label: "Lei nº 12.519, de 10 de novembro de 2011 (Dia Nacional de Zumbi e da Consciência Negra)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/lei/l12519.htm",
  },
  lei14759: {
    label: "Lei nº 14.759, de 21 de dezembro de 2023 (feriado nacional)",
    url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14759.htm",
  },
  lei_aurea: {
    label: "Lei nº 3.353, de 13 de maio de 1888 (Lei Áurea)",
    url: "https://www.planalto.gov.br/ccivil_03/leis/lim/LIM3353.htm",
  },
  cf1988: {
    label: "Constituição da República Federativa do Brasil de 1988, art. 5º, VI",
    url: "https://www.planalto.gov.br/ccivil_03/constituicao/constituicao.htm",
  },
  slave: {
    label: "Slave Voyages, banco de dados do tráfico transatlântico (estimativas)",
    url: "https://www.slavevoyages.org/",
  },
  iphan: {
    label: "IPHAN, Ofício das Baianas de Acarajé, Livro dos Saberes (2005)",
    url: "https://www.gov.br/iphan/",
  },
  unesco_cap: {
    label: "UNESCO, Lista do Patrimônio Cultural Imaterial da Humanidade: capoeira",
    url: "https://ich.unesco.org/",
  },
  unesco_samba: {
    label: "UNESCO, Obras-Primas do Patrimônio Oral e Imaterial: Samba de Roda do Recôncavo Baiano",
    url: "https://ich.unesco.org/",
  },
  abl: {
    label: "Academia Brasileira de Letras, acervo sobre Machado de Assis",
    url: "https://www.academia.org.br/",
  },
  palmares: {
    label: "Fundação Cultural Palmares, história do Quilombo dos Palmares",
    url: "https://www.gov.br/palmares/",
  },
  itau: {
    label: "Enciclopédia Itaú Cultural, verbetes biográficos",
    url: "https://enciclopedia.itaucultural.org.br/",
  },
} as const;

export type SourceId = keyof typeof sources;

export interface SourceEntry {
  label: string;
  url?: string;
}
