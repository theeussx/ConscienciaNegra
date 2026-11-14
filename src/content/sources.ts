// Years identify the source publication; "s.d." means no publication date was established.
export const sources: Record<
  string,
  { title: string; url: string; publisher: string; year: string }
> = {
  history: {
    title: "História Geral da África",
    url: "https://www.unesco.org/pt/general-history-africa",
    publisher: "UNESCO",
    year: "s.d.",
  },
  palmares: {
    title:
      "Documentos originais revelam novos aspectos da história de Palmares",
    url: "https://revistapesquisa.fapesp.br/documentos-originais-revelam-novos-aspectos-da-historia-de-palmares/",
    publisher: "Pesquisa FAPESP",
    year: "2023",
  },
  dandara: {
    title:
      "Pesquisas históricas lançam novos olhares sobre Luiza Mahin e Dandara",
    url: "https://jornal.unesp.br/2025/09/29/pesquisas-historicas-lancam-novos-olhares-sobre-luiza-mahin-e-dandara/",
    publisher: "Jornal da Unesp",
    year: "2025",
  },
  abolition: {
    title: "Lei Áurea faz parte do acervo do Arquivo Nacional",
    url: "https://www.gov.br/arquivonacional/pt-br/canais_atendimento/imprensa/noticias/lei-aurea-faz-parte-do-acervo-do-arquivo-nacional",
    publisher: "Arquivo Nacional",
    year: "2020",
  },
  abolitionLaw: {
    title: "Lei nº 3.353, de 13 de maio de 1888 — Lei Áurea",
    url: "https://www2.camara.leg.br/legin/fed/leimp/1824-1899/lei-3353-13-maio-1888-533138-norma-pl.html",
    publisher: "Câmara dos Deputados",
    year: "1888",
  },
  november: {
    title: "Dia da Consciência Negra se torna feriado nacional",
    url: "https://www12.senado.leg.br/noticias/noticias/materias/2023/12/22/dia-da-consciencia-negra-se-torna-feriado-nacional",
    publisher: "Agência Senado",
    year: "2023",
  },
  novemberHistory: {
    title:
      "Dia da Consciência Negra, 50 anos: liberdade conquistada, não concedida",
    url: "https://www12.senado.leg.br/noticias/infomaterias/2021/11/dia-da-consciencia-negra-50-anos-liberdade-conquistada-nao-concedida",
    publisher: "Agência Senado",
    year: "2021",
  },
  novemberLaw: {
    title: "Lei nº 12.519, de 10 de novembro de 2011",
    url: "https://www2.camara.leg.br/legin/fed/lei/2011/lei-12519-10-novembro-2011-611762-publicacaooriginal-134215-pl.html",
    publisher: "Câmara dos Deputados",
    year: "2011",
  },
  capoeira: {
    title:
      "Roda de capoeira e ofício dos mestres de capoeira — Dossiê Iphan 12",
    url: "https://bibliotecadigital.iphan.gov.br/items/11bba387-1a54-4cd9-9a47-f74b38ee3212",
    publisher: "IPHAN",
    year: "2014",
  },
  samba: {
    title: "Samba de Roda of the Recôncavo of Bahia",
    url: "https://ich.unesco.org/en/RL/samba-de-roda-of-the-reconcavo-of-bahia-00101",
    publisher: "UNESCO",
    year: "s.d.",
  },
  maracatu: {
    title: "Maracatu Nação — bem cultural registrado",
    url: "https://bcr.iphan.gov.br/bens-culturais/maracatu-nacao/",
    publisher: "IPHAN",
    year: "s.d.",
  },
  maracatuBaqueSolto: {
    title:
      "Registro do Maracatu de Baque Solto como Patrimônio Cultural do Brasil",
    url: "https://bcr.iphan.gov.br/acoes-de-salvaguarda/registro-do-maracatu-de-baque-solto-como-patrimonio-cultural-do-brasil/",
    publisher: "IPHAN",
    year: "s.d.",
  },
  food: {
    title: "Ofício das Baianas de Acarajé — bem cultural registrado",
    url: "https://bcr.iphan.gov.br/bens-culturais/oficio-das-baianas-de-acaraje/",
    publisher: "IPHAN",
    year: "s.d.",
  },
  foodDossier: {
    title: "Ofício das Baianas de Acarajé — Dossiê Iphan 6",
    url: "https://www.ipatrimonio.org/wp-content/uploads/2017/05/PatImDos_OficioBaianasAcaraje_m.pdf",
    publisher: "IPHAN (cópia disponibilizada pelo iPatrimônio)",
    year: "2007",
  },
  foodRecipes: {
    title: "No tabuleiro da baiana tem...",
    url: "https://www.gov.br/secretariageral/pt-br/consea/noticias/2016/no-tabuleiro-da-baiana-tem",
    publisher: "Consea — Secretaria-Geral da Presidência da República",
    year: "2016",
  },
  balotelli: {
    title:
      "Balotelli suffers racist abuse, threatens to walk off after booting ball into crowd",
    url: "https://www.espn.com/soccer/story/_/id/37578425/mario-balotelli-suffers-racist-abuse-threatens-walk-booting-ball-crowd-brescia-defeat-verona",
    publisher: "ESPN",
    year: "2019",
  },
  balotelliSanction: {
    title:
      "Verona ordered to close part of stadium after racist abuse of Mario Balotelli",
    url: "https://www.bbc.com/sport/football/50299720",
    publisher: "BBC Sport",
    year: "2019",
  },
  balotelliAppeal: {
    title: "Court suspends Verona stand closure",
    url: "https://www.ansa.it/english/news/sports/2019/11/21/court-suspends-verona-stand-closure_98d137f8-c440-45f5-9df1-ef237cd43a10.html",
    publisher: "ANSA",
    year: "2019",
  },
  balotelliFinalAppeal: {
    title: 'Razzismo: Verona, un solo indagato per "buu" a Balotelli',
    url: "https://www.ansa.it/sito/notizie/sport/calcio/2019/12/22/razzismo-verona-un-solo-indagato-per-buu-a-balotelli_c58505c5-41ff-406b-83c0-7d381efdb4c0.html",
    publisher: "ANSA",
    year: "2019",
  },
  vinicius: {
    title:
      "Comunicado Oficial: condenação de três responsáveis pelos ataques a Vinícius Júnior",
    url: "https://www.realmadrid.com/es-ES/noticias/club/comunicados/comunicado-oficial-10-06-2024",
    publisher: "Real Madrid C. F.",
    year: "2024",
  },
  viniciusAppeal: {
    title:
      "Resolução do Comité de Apelación — Valencia CF, expediente 627–2022/2023",
    url: "https://rfef.es/sites/default/files/sanciones/RESOLUCI%C3%93N%20COMIT%C3%89%20DE%20APELACI%C3%93N%20-%20Valencia%20CF.pdf",
    publisher: "Real Federación Española de Fútbol",
    year: "2023",
  },
  richarlison: {
    title: "Banana thrown at Brazil's Richarlison in racist attack in Paris",
    url: "https://www.bbc.co.uk/sport/football/63056129",
    publisher: "BBC Sport",
    year: "2022",
  },
  machado: {
    title: "Machado de Assis — Vida e Obra",
    url: "https://machado.mec.gov.br/",
    publisher: "Ministério da Educação",
    year: "s.d.",
  },
  carolina: {
    title: "Carolina Maria de Jesus — Biografia",
    url: "https://carolinamariadejesus.ims.com.br/biografia/",
    publisher: "Instituto Moreira Salles",
    year: "s.d.",
  },
  gama: {
    title: "Juristas que marcaram a história do país: Luís Gama",
    url: "https://www.oab.org.br/noticia/60070/juristas-que-marcaram-a-historia-do-pais-luis-gama?argumentoPesquisa=Gama",
    publisher: "Conselho Federal da OAB",
    year: "2022",
  },
  milton: {
    title:
      "Google homenageia Milton Santos, geógrafo e professor emérito da FFLCH",
    url: "https://www.fflch.usp.br/962?page=1",
    publisher: "FFLCH — Universidade de São Paulo",
    year: "2018",
  },
  evaristo: {
    title: "Ocupação Conceição Evaristo",
    url: "https://www.itaucultural.org.br/ocupacao/conceicao-evaristo/",
    publisher: "Itaú Cultural",
    year: "2017",
  },
  pele: {
    title: "Pele's three titles — FIFA World Cup records",
    url: "https://www.fifa.com/en/tournaments/mens/worldcup/articles/pele-three-world-cup-titles-only-player",
    publisher: "FIFA",
    year: "s.d.",
  },
  peleBiography: {
    title: "Pele: 1940–2022",
    url: "https://www.premierleague.com/en/news/2998556",
    publisher: "Premier League",
    year: "2022",
  },
  present: {
    title:
      "Pessoas pretas e pardas continuam com menor acesso a emprego, educação, segurança e saneamento",
    url: "https://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/35467-pessoas-pretas-e-pardas-continuam-com-menor-acesso-a-emprego-educacao-seguranca-e-saneamento",
    publisher: "Agência de Notícias IBGE",
    year: "2022",
  },
  education: {
    title: "Lei nº 10.639, de 9 de janeiro de 2003",
    url: "https://legis.senado.leg.br/norma/552515",
    publisher: "Senado Federal",
    year: "2003",
  },
  religions: {
    title:
      "Terreiros do Distrito Federal e entorno — Inventário Nacional de Referências Culturais",
    url: "https://bibliotecadigital.iphan.gov.br/items/adfe7d05-72de-4cfc-9147-190c279e5357",
    publisher: "Iphan-DF",
    year: "2012",
  },
  languages: {
    title: "Línguas africanas que fazem o Brasil",
    url: "https://acervo.museudalinguaportuguesa.org.br/acervos/7004/linguas-africanas-que-fazem-o-brasil",
    publisher: "Museu da Língua Portuguesa",
    year: "2025",
  },
};
