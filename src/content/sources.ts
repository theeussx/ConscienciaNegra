/**
 * Registro central de fontes. Cada dado com número, data ou afirmação factual
 * deve apontar para uma destas entradas.
 */
export const sources = {
  acaraje_ipac: { label: "IPAC Bahia: ofício das baianas do acarajé", url: "https://www.ba.gov.br/ipac/oficio-das-baianas-do-acaraje" },
  jongo: { label: "IPHAN: dossiê Jongo no Sudeste", url: "https://bibliotecadigital.iphan.gov.br/items/5401163f-dfca-47ee-ac7f-2d45ee4d4a90/full" },
  alimento: { label: "IPHAN: dossiê Ofício das Baianas de Acarajé", url: "https://portal.iphan.gov.br/uploads/publicacao/PatImDos_OficioBaianasAcaraje_m.pdf" },
  caruru: { label: "Governo da Bahia: caruru de São Cosme e São Damião", url: "https://www.ba.gov.br/comunicacao/noticias/2025-09/373925/caruru-de-sao-cosme-e-sao-damiao-completa-um-ano-de-reconhecimento-como" },
  milton: { label: "USP: centenário de Milton Santos", url: "https://www.fflch.usp.br/177964?page=1" },
  conceicao: { label: "Itaú Cultural: escrevivência de Conceição Evaristo", url: "https://www.itaucultural.org.br/ocupacao/conceicao-evaristo/escrevivencia/" },
  pele: { label: "FIFA: Pelé e os três títulos mundiais", url: "https://www.fifa.com/es/tournaments/mens/worldcup/articles/pele-unico-tricampeon-de-la-copa-mundial-de-la-fifa" },
  religioes: { label: "IPHAN: inventário de terreiros do Distrito Federal e entorno", url: "https://bibliotecadigital.iphan.gov.br/items/adfe7d05-72de-4cfc-9147-190c279e5357" },
  maracatu: { label: "IPHAN: Maracatu Nação", url: "https://bcr.iphan.gov.br/bens-culturais/maracatu-nacao/" },
  linguas: { label: "Museu da Língua Portuguesa: línguas africanas que fazem o Brasil", url: "https://acervo.museudalinguaportuguesa.org.br/acervos/7004/linguas-africanas-que-fazem-o-brasil" },
  carolina_bio: { label: "Instituto Moreira Salles: biografia de Carolina Maria de Jesus", url: "https://carolinamariadejesus.ims.com.br/biografia/" },
  dandara: { label: "Jornal da Unesp: pesquisas históricas sobre Dandara (2025)", url: "https://jornal.unesp.br/2025/09/29/pesquisas-historicas-lancam-novos-olhares-sobre-luiza-mahin-e-dandara/" },
  gama: { label: "Fundação Joaquim Nabuco: Luiz Gama", url: "https://pesquisaescolar.fundaj.gov.br/pt-br/artigo/luiz-gama/" },
  balotelli_recurso: { label: "Federação Italiana de Futebol: decisão do recurso sobre Verona (2019)", url: "https://www.figc.it/media/118120/sez-i-decisione-n-114csa-del-22-dicembre-2019.pdf" },
  vinicius_recurso: { label: "RFEF: decisão de recurso, 26 mai. 2023", url: "https://rfef.es/sites/default/files/sanciones/RESOLUCI%C3%93N%20COMIT%C3%89%20DE%20APELACI%C3%93N%20-%20Valencia%20CF.pdf" },
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
    label: "IBGE, Censo Demográfico 2022: distribuição por cor ou raça",
    url: "https://agenciadenoticias.ibge.gov.br/media/com_mediaibge/arquivos/2e500e343e167fe11fab25458569750c.pdf",
  },
  atlas: {
    label: "Atlas da Violência 2026, Ipea e Fórum Brasileiro de Segurança Pública (dados de 2024)",
    url: "https://www.ipea.gov.br/portal/categorias/45-todas-as-noticias/noticias/16394-atlas-da-violencia-brasil-registrou-42-590-homicidios-em-2024-menor-resultado-da-serie-historica-mas-subnotificacao-preocupa",
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
    url: "https://bcr.iphan.gov.br/bens-culturais/oficio-das-baianas-de-acaraje/",
  },
  unesco_cap: {
    label: "UNESCO, Lista do Patrimônio Cultural Imaterial da Humanidade: capoeira",
    url: "https://ich.unesco.org/en/RL/capoeira-circle-00892",
  },
  unesco_samba: {
    label: "UNESCO, Obras-Primas do Patrimônio Oral e Imaterial: Samba de Roda do Recôncavo Baiano",
    url: "https://ich.unesco.org/en/RL/samba-de-roda-of-the-reconcavo-of-bahia-00101",
  },
  abl: {
    label: "Ministério da Educação: cronologia de Machado de Assis",
    url: "https://machado.mec.gov.br/115-cronologia",
  },
  palmares: {
    label: "Pesquisa FAPESP: documentos sobre a história de Palmares",
    url: "https://revistapesquisa.fapesp.br/documentos-originais-revelam-novos-aspectos-da-historia-de-palmares/",
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
