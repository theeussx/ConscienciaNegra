/** Capítulos da narrativa, na ordem de apresentação. Notas são apenas para o apresentador. */
export interface ChapterMeta {
  id: string;
  number: string;
  short: string;
  title: string;
  notes: string[];
}

export const chapters: ChapterMeta[] = [
  {
    id: "cap-01",
    number: "01",
    short: "Abertura",
    title: "Uma história que vive em nós.",
    notes: [
      "Abra com a fotografia e a frase central. Deixe a sala ler antes de avançar.",
      "O 20 de novembro é data de reflexão, não apenas de comemoração.",
      "Não comece pela escravização: a história tem antes, durante e depois.",
    ],
  },
  {
    id: "cap-02",
    number: "02",
    short: "História e resistência",
    title: "Resistir também é fazer história.",
    notes: [
      "Use a linha do tempo: cada marco aparece conforme você rola.",
      "Clique em Palmares, Zumbi, Dandara e Lei Áurea para aprofundar. Espaço pausa a digitação.",
      "Confirme as datas: morte de Zumbi em 1695 e abolição em 1888.",
    ],
  },
  {
    id: "cap-03",
    number: "03",
    short: "Cultura afro-brasileira",
    title: "A África que vive no Brasil.",
    notes: [
      "Lembre que a África não é um país: são centenas de povos, línguas e tradições.",
      "Abra o maracatu para destacar Pernambuco. O maracatu-nação nasce do cortejo do Rei do Congo.",
      "Trate as religiões de matriz africana como práticas vivas, não como espetáculo.",
    ],
  },
  {
    id: "cap-04",
    number: "04",
    short: "Culinária",
    title: "Sabores que contam histórias.",
    notes: [
      "Comece pelo acarajé, com a fotografia em destaque.",
      "Explique a origem iorubá do nome e o registro do IPHAN de 2005.",
      "Feche com a ideia de que cada prato guarda uma história de encontro entre povos.",
    ],
  },
  {
    id: "cap-05",
    number: "05",
    short: "Racismo no futebol",
    title: "O talento não deveria ter cor.",
    notes: [
      "Tom sério: este é o capítulo de maior impacto. Use pausas entre os marcos.",
      "Caso Balotelli: 3 de novembro de 2019. Leia o aviso do árbitro e o protocolo antirracismo.",
      "Vinícius Júnior e Richarlison: apresente apenas fatos documentados, sem especulação.",
    ],
  },
  {
    id: "cap-06",
    number: "06",
    short: "Protagonismo negro",
    title: "Não apenas resistiram. Transformaram o mundo.",
    notes: [
      "Abra uma biografia por vez. Cada retrato tem um contexto próprio.",
      "Machado de Assis, Carolina Maria de Jesus, Luiz Gama, Milton Santos, Conceição Evaristo e Pelé.",
      "Pergunte à sala: quantas pessoas negras a escola apresenta como autoras de ideias?",
    ],
  },
  {
    id: "cap-07",
    number: "07",
    short: "Consciência negra hoje",
    title: "A consciência negra é compromisso do presente.",
    notes: [
      "Use os números com fonte: IBGE (Censo 2022) e Atlas da Violência 2026.",
      "Mostre as leis: 1989, 2003, 2012 e 2023. Diga o ano e a fonte de cada uma.",
      "Convide o público à responsabilidade coletiva, sem apontar culpados individuais.",
    ],
  },
  {
    id: "cap-08",
    number: "08",
    short: "Encerramento",
    title: "O futuro também tem raízes.",
    notes: [
      "Leia as três frases finais uma por uma, com pausa entre elas.",
      "Deixe o silêncio antes da última frase: combater o racismo é construir o futuro.",
      "Faça a transição para os participantes.",
    ],
  },
  {
    id: "cap-09",
    number: "09",
    short: "Participantes",
    title: "Quem fez acontecer.",
    notes: [
      "Substitua os placeholders em src/content/participants.ts antes da apresentação.",
      "Mencione as fontes e os créditos das imagens no rodapé final.",
      "Agradeça à turma e aos participantes.",
    ],
  },
];
