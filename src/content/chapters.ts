import type { Chapter, Scene, Entry } from "../types/content";
import { participants } from "./participants";
export const chapters: Chapter[] = [
  {
    title: "Uma história que vive em nós.",
    short: "Abertura",
    description: "Identidade, pertencimento e memória.",
  },
  {
    title: "História e resistência",
    short: "História",
    description: "Muito antes de 1500. Muito além de 1888.",
  },
  {
    title: "A África que vive no Brasil.",
    short: "Cultura",
    description: "Saberes que atravessam gerações.",
  },
  {
    title: "Sabores que contam histórias.",
    short: "Ancestralidade",
    description: "A memória também se senta à mesa.",
  },
  {
    title: "O talento não deveria ter cor.",
    short: "Futebol",
    description: "O respeito precisa entrar em campo.",
  },
  {
    title: "Transformaram o mundo.",
    short: "Protagonismo",
    description: "Vozes, ideias e caminhos que permanecem.",
  },
  {
    title: "A história continua sendo escrita.",
    short: "O presente",
    description: "Consciência se transforma em atitude.",
  },
  {
    title: "O futuro também tem raízes.",
    short: "O futuro",
    description: "Uma história que continua em nós.",
  },
  { title: "Quem fez acontecer", short: "Participantes", description: "Por trás de cada história apresentada, existe uma equipe que acredita na importância de contá-la." },
];
const culture: Entry[] = [
  {
    title: "Maracatu",
    tag: "PERNAMBUCO · RITMO E MEMÓRIA",
    text: "Um cortejo de ancestralidades.",
    detail:
      "O maracatu-nação reúne batuque, dança, cortejo real e vínculos com comunidades e religiosidades afro-brasileiras. Suas trajetórias dialogam com as coroações de reis e rainhas do Congo. Em Pernambuco, as nações preservam saberes coletivos. Maracatu-nação e maracatu de baque solto são manifestações distintas, ambas reconhecidas pelo Iphan.",
    image: "maracatu",
    source: "maracatu",
    sources: ["maracatuBaqueSolto"],
  },
  {
    title: "Capoeira",
    tag: "CORPO · JOGO · RESISTÊNCIA",
    text: "O corpo guarda conhecimento.",
    detail:
      "Prática cultural afro-brasileira que articula luta, jogo, dança, canto e instrumentos como o berimbau. A roda transmite saberes entre mestres e aprendizes. Sua história inclui perseguição e criminalização, antes do reconhecimento como patrimônio cultural.",
    image: "capoeira",
    source: "capoeira",
  },
  {
    title: "Samba",
    tag: "MÚSICA · COMUNIDADE",
    text: "Um Brasil de muitos encontros.",
    detail:
      "O samba se constituiu em diferentes territórios e formas. O samba de roda do Recôncavo Baiano associa música, poesia e dança; comunidades negras tiveram papel central em sua transmissão. O samba urbano carioca possui trajetória própria, em diálogo com migrações, festas e redes de sociabilidade.",
    image: "samba",
    source: "samba",
  },
  {
    title: "Fé, palavra e celebração",
    tag: "PLURALIDADE · PERTENCIMENTO",
    text: "Não existe uma única África.",
    detail:
      "Candomblé e umbanda têm histórias próprias e tradições diversas. Terreiros também são espaços de memória e comunidade. Línguas de diferentes povos africanos participaram da formação do português brasileiro. Respeitar essas heranças exige combater a intolerância religiosa, sem reduzir as culturas africanas a uma identidade única.",
    source: "religions",
    sources: ["languages"],
  },
];
const foods: Entry[] = [
  {
    title: "Acarajé",
    tag: "BAHIA · SABERES DAS BAIANAS",
    text: "Mais que alimento, um ofício e uma memória.",
    detail:
      "Bolinho de feijão-fradinho, cebola e sal, frito no azeite de dendê. Integra tradições religiosas e o trabalho das baianas de acarajé. O Iphan reconhece o ofício como patrimônio cultural: saber preparar, vestir, vender e transmitir conhecimentos.",
    ingredients: "Feijão-fradinho · cebola · azeite de dendê",
    image: "acaraje",
    source: "foodDossier",
  },
  {
    title: "Vatapá",
    tag: "SABERES · ENCONTROS",
    text: "Uma receita, muitas formas de transmitir.",
    detail:
      "Presente especialmente na cozinha baiana, reúne ingredientes e técnicas em uma preparação cremosa. As receitas variam entre famílias e regiões; pode levar pão, camarão seco, amendoim, castanha, leite de coco e dendê. Não há uma fórmula única para todo o Brasil.",
    ingredients: "Dendê · leite de coco · camarão seco · pão ou farinha",
    image: "vatapa",
    source: "foodRecipes",
  },
  {
    title: "Caruru",
    tag: "COMIDA · CELEBRAÇÃO",
    text: "Sabores que também reúnem pessoas.",
    detail:
      "Preparação à base de quiabo, encontrada em tradições da Bahia e em celebrações com diferentes sentidos comunitários e religiosos. Pode levar dendê e camarão seco. A palavra também pode designar uma refeição ritual, de acordo com o contexto.",
    ingredients: "Quiabo · dendê · camarão seco",
    image: "caruru",
    source: "foodDossier",
  },
  {
    title: "Abará",
    tag: "FOLHA · VAPOR · ANCESTRALIDADE",
    text: "O cuidado que passa de mão em mão.",
    detail:
      "Preparado com massa de feijão-fradinho e dendê, envolvido em folha de bananeira e cozido no vapor. Compartilha ingredientes com o acarajé, mas a técnica de cocção e o resultado são diferentes. Faz parte dos saberes associados ao ofício das baianas.",
    ingredients: "Feijão-fradinho · dendê · folha de bananeira",
    image: "abará",
    source: "foodRecipes",
  },
];
const people: Entry[] = [
  {
    title: "Machado de Assis",
    tag: "1839–1908 · LITERATURA",
    text: "Um olhar que mudou a literatura brasileira.",
    detail:
      "Autor de Memórias póstumas de Brás Cubas e Dom Casmurro, participou da fundação da Academia Brasileira de Letras e foi seu primeiro presidente. Sua obra investiga relações sociais, poder e contradições humanas.",
    image: "machado",
    source: "machado",
  },
  {
    title: "Carolina Maria de Jesus",
    tag: "1914–1977 · LITERATURA",
    text: "A própria voz como documento.",
    detail:
      "Escritora de Quarto de despejo, publicado em 1960 a partir de seus diários. Registrou a fome, o cotidiano e a desigualdade na favela do Canindé, em São Paulo, construindo uma obra que vai além desse livro.",
    image: "carolina",
    source: "carolina",
  },
  {
    title: "Luiz Gama",
    tag: "1830–1882 · DIREITO E ABOLICIONISMO",
    text: "A liberdade como trabalho de uma vida.",
    detail:
      "Nascido livre, foi vendido ilegalmente como escravizado na infância. Recuperou a liberdade e atuou como jornalista, poeta e defensor de pessoas escravizadas nos tribunais, tornando-se referência do abolicionismo.",
    image: "gama",
    source: "gama",
  },
  {
    title: "Milton Santos",
    tag: "1926–2001 · GEOGRAFIA",
    text: "Pensar o espaço, compreender o mundo.",
    detail:
      "Geógrafo brasileiro que estudou urbanização, território e globalização. Recebeu o Prêmio Vautrin Lud em 1994. Sua obra ajuda a compreender como o espaço reflete e produz desigualdades.",
    image: "milton",
    source: "milton",
  },
  {
    title: "Conceição Evaristo",
    tag: "1946 · LITERATURA",
    text: "Viver, lembrar, escrever.",
    detail:
      "Autora de Ponciá Vicêncio e Olhos d’água. Sua produção articula experiências, memória e invenção literária. A noção de escrevivência, desenvolvida pela escritora, aproxima escrita e vivências de mulheres negras.",
    image: "evaristo",
    source: "evaristo",
  },
  {
    title: "Pelé",
    tag: "1940–2022 · ESPORTE",
    text: "Um talento que atravessou fronteiras.",
    detail:
      "Edson Arantes do Nascimento marcou a história do futebol com Santos e seleção brasileira. Foi campeão mundial em 1958, 1962 e 1970. Sua projeção internacional ampliou a presença de um atleta negro brasileiro no imaginário mundial.",
    image: "pele",
    source: "pele",
  },
];
export const scenes: Scene[] = [
  {
    id: "abertura",
    chapter: 0,
    kicker: "20 DE NOVEMBRO · CONSCIÊNCIA NEGRA",
    title: "Uma história que vive em nós.",
    subtitle: "A cultura que nos forma. A resistência que nos inspira.",
    body: "Uma história de identidade, cultura, resistência e humanidade.",
    layout: "hero",
    image: "hero",
    sources: ["november"],
    notes:
      "Receba o público. Explique que a história negra é parte da história de todos nós. A data convida ao reconhecimento e à ação durante todo o ano. Avance quando estiver pronto.",
  },
  {
    id: "africas",
    chapter: 1,
    kicker: "ANTES DA TRAVESSIA",
    title: "A história não começa na escravidão.",
    body: "Reinos, cidades, conhecimentos e culturas. O continente africano já reunia sociedades diversas, com histórias que não cabem em uma única narrativa.",
    layout: "statement",
    sources: ["history"],
    notes:
      "Cite a diversidade de povos, línguas e organizações políticas. Evite falar de África como um país ou uma cultura homogênea. A escravização não define toda a experiência histórica africana.",
  },
  {
    id: "trajetorias",
    chapter: 1,
    kicker: "MEMÓRIA EM MOVIMENTO",
    title: "Resistir. Existir. Transformar.",
    body: "Selecione um marco para conhecer a história por trás da data.",
    layout: "timeline",
    sources: [
      "history",
      "palmares",
      "dandara",
      "abolition",
      "november",
      "novemberHistory",
    ],
    notes:
      "Percorra os marcos sem tratar a história como progresso inevitável. A abolição jurídica não trouxe automaticamente terra, educação e igualdade. Sobre Dandara, diferencie memória de resistência e documentação escassa.",
    items: [
      {
        title: "A travessia forçada",
        tag: "SÉCULOS XVI–XIX",
        text: "O tráfico transatlântico",
        detail:
          "Milhões de africanos foram forçados a atravessar o Atlântico. No Brasil, a escravização sustentou atividades econômicas e conviveu com resistências: fugas, organização comunitária, negociação, revoltas e preservação de saberes.",
        source: "history",
      },
      {
        title: "Palmares",
        tag: "SÉCULO XVII",
        text: "Território de liberdade",
        detail:
          "Na região da Serra da Barriga, atual Alagoas, Palmares reuniu comunidades que enfrentaram a ordem escravista. Zumbi é uma referência de sua resistência. Dandara ocupa lugar importante na memória dessa luta; os detalhes de sua biografia não têm comprovação na documentação do século XVII consultada por especialistas.",
        source: "palmares",
        sources: ["dandara"],
      },
      {
        title: "Abolição incompleta",
        tag: "13 MAI 1888",
        text: "Liberdade na lei. Desigualdade na vida.",
        detail:
          "A Lei Áurea extinguiu juridicamente a escravidão no Brasil. Resultado de muitas lutas, a abolição não foi acompanhada de uma política ampla de inclusão das pessoas libertas, como acesso garantido à terra, moradia e educação.",
        source: "abolition",
      },
      {
        title: "20 de novembro",
        tag: "MEMÓRIA E PRESENTE",
        text: "Um dia para reconhecer. Um compromisso diário.",
        detail:
          "A data remete à morte de Zumbi dos Palmares, em 1695. O movimento negro construiu sua força como símbolo de resistência e consciência. A legislação brasileira reconheceu o Dia Nacional de Zumbi e da Consciência Negra e, em 2023, a data tornou-se feriado nacional.",
        source: "november",
      },
    ],
  },
  {
    id: "cultura",
    chapter: 2,
    kicker: "HERANÇAS VIVAS",
    title: "A África que vive no Brasil.",
    body: "No toque do tambor. No movimento do corpo. Nas palavras, nas festas e nos saberes que permanecem.",
    layout: "mural",
    items: culture,
    sources: [
      "capoeira",
      "samba",
      "maracatu",
      "maracatuBaqueSolto",
      "religions",
      "languages",
    ],
    notes:
      "Convide a turma a reconhecer manifestações presentes no cotidiano. Destaque Pernambuco e a diferença entre maracatu-nação e baque solto. As manifestações brasileiras nascem de processos históricos de encontros e conflitos.",
  },
  {
    id: "sabores",
    chapter: 3,
    kicker: "A MEMÓRIA À MESA",
    title: "Sabores que contam histórias.",
    body: "Entre o gesto de preparar e o ato de compartilhar, saberes atravessam gerações.",
    layout: "food",
    items: foods,
    sources: ["food", "foodDossier", "foodRecipes"],
    notes:
      "Apresente as baianas como detentoras de um ofício e de conhecimentos. As receitas são plurais. Respeite os contextos religiosos e comunitários, sem tratar os pratos apenas como mercadorias.",
  },
  {
    id: "balotelli-jogador",
    chapter: 4,
    kicker: "05 · O RACISMO NO FUTEBOL",
    title: "Ele só queria jogar futebol.",
    subtitle: "Mario Balotelli",
    body: "O talento não deveria ter cor. Quando o preconceito ultrapassa as arquibancadas, o respeito precisa entrar em campo.",
    layout: "player",
    image: "balotelli",
    sources: ["balotelli"],
    notes:
      "Introduza Balotelli, então atacante do Brescia. O retrato é ilustrativo da pessoa, não necessariamente do episódio de 2019. Não reproduza insultos.",
  },
  {
    id: "balotelli-verona",
    chapter: 4,
    kicker: "HELLAS VERONA × BRESCIA",
    title: "Verona, Itália.",
    subtitle: "3 de novembro de 2019.",
    body: "Durante a partida do Campeonato Italiano, Balotelli reagiu a manifestações racistas vindas das arquibancadas.",
    layout: "event",
    image: "balotelli",
    sources: ["balotelli"],
    notes:
      "Estabeleça local, data e contexto. A partida era Hellas Verona contra Brescia. Faça uma pausa antes de avançar para a sequência dos acontecimentos.",
  },
  {
    id: "balotelli-reacao",
    chapter: 4,
    kicker: "O ACONTECIMENTO",
    title: "Quando jogar deixou de ser possível.",
    body: "Uma reação que tornou visível a violência.",
    layout: "sequence",
    sources: [
      "balotelli",
      "balotelliSanction",
      "balotelliAppeal",
      "balotelliFinalAppeal",
    ],
    notes:
      "Relate os fatos de maneira objetiva. O fechamento parcial foi anunciado em 5 de novembro de 2019. Em 21 de novembro, a medida foi suspensa para investigação complementar. Após recurso, a sanção foi limitada ao setor 8 e ficou suspensa condicionalmente por um ano, conforme notícia de 22 de dezembro. Não afirme que a arquibancada efetivamente foi fechada ou que houve revogação integral.",
    items: [
      {
        title: "A reação",
        tag: "01",
        text: "Balotelli chutou a bola em direção à arquibancada.",
        detail:
          "Em reação aos insultos racistas, interrompeu a jogada e demonstrou intenção de deixar o gramado.",
        source: "balotelli",
      },
      {
        title: "A interrupção",
        tag: "02",
        text: "A partida foi temporariamente interrompida.",
        detail:
          "Companheiros e oficiais intervieram. Um aviso foi feito no estádio e o jogo prosseguiu.",
        source: "balotelli",
      },
      {
        title: "A resposta institucional",
        tag: "03",
        text: "A punição anunciada foi alterada após recurso.",
        detail:
          "O fechamento parcial por uma partida foi anunciado em novembro. Após recurso, a sanção foi limitada ao setor 8 e ficou suspensa condicionalmente por um ano.",
        source: "balotelliFinalAppeal",
      },
    ],
  },
  {
    id: "balotelli-reflexao",
    chapter: 4,
    kicker: "UMA PERGUNTA QUE PERMANECE",
    title: "Até quando alguém precisará lutar pelo direito de ser respeitado?",
    body: "Combater o racismo é responsabilidade de torcedores, clubes, instituições e de cada um de nós.",
    layout: "reflection",
    sources: ["balotelli"],
    notes:
      "Pause. Não é necessário preencher o silêncio. Convide o público a pensar em como o respeito também deve aparecer na escola e nas conversas cotidianas.",
  },
  {
    id: "outros-atletas",
    chapter: 4,
    kicker: "O PROBLEMA NÃO É ISOLADO",
    title: "Outros nomes. A mesma urgência.",
    body: "Reconhecer os episódios é o começo. Enfrentar as estruturas é um compromisso coletivo.",
    layout: "cases",
    sources: ["vinicius", "richarlison"],
    notes:
      "Os casos não são equivalentes nem esgotam a questão. Use as datas e contextos indicados. Não especule sobre desfechos além dos documentados nas fontes.",
    items: [
      {
        title: "Vinícius Júnior",
        tag: "21 MAI 2023 · VALENCIA × REAL MADRID",
        text: "Racismo no estádio Mestalla.",
        detail:
          "Vinícius Júnior foi alvo de insultos racistas durante a partida em Valência. O jogo foi interrompido. Em junho de 2024, três torcedores foram condenados em decisão ligada ao episódio, conforme comunicado do Real Madrid.",
        source: "vinicius",
      },
      {
        title: "Richarlison",
        tag: "27 SET 2022 · BRASIL × TUNÍSIA",
        text: "Uma banana foi lançada em sua direção.",
        detail:
          "Após um gol no amistoso no Parc des Princes, em Paris, uma banana foi lançada na direção de Richarlison. A CBF condenou o ato e pediu punição. O relato não atribui um desfecho judicial sem documentação.",
        source: "richarlison",
      },
    ],
  },
  {
    id: "protagonistas",
    chapter: 5,
    kicker: "VOZES QUE ABREM CAMINHOS",
    title: "Não apenas resistiram. Transformaram o mundo.",
    body: "Literatura, ciência, justiça, esporte. Histórias que ampliam o que podemos imaginar.",
    layout: "people",
    items: people,
    sources: people.map((p) => p.source),
    notes:
      "Escolha algumas trajetórias para aprofundar. Evite apresentar essas pessoas como exceções que apagam as barreiras estruturais. Valorize suas obras e contribuições concretas.",
  },
  {
    id: "presente",
    chapter: 6,
    kicker: "CONSCIÊNCIA É AÇÃO",
    title: "A história continua sendo escrita.",
    body: "O racismo também se manifesta nas oportunidades, nas instituições e nas ausências. Entender suas estruturas é parte de transformá-las.",
    layout: "present",
    sources: ["present", "education"],
    notes:
      "Explique racismo estrutural como padrões sociais que reproduzem desigualdades, e não apenas atitudes isoladas. Não improvise estatísticas. Conecte o tema ao acesso à educação, ao trabalho e à representação.",
    items: [
      {
        title: "Reconhecer",
        tag: "01",
        text: "Perceber desigualdades e ouvir quem as enfrenta.",
        detail:
          "Perguntar quem está representado, quem tem acesso e quais barreiras se repetem ajuda a tornar visíveis padrões de desigualdade.",
        source: "present",
      },
      {
        title: "Aprender",
        tag: "02",
        text: "Valorizar histórias, autores e saberes negros.",
        detail:
          "A educação antirracista atravessa o currículo e o ano inteiro. A Lei 10.639/2003 estabeleceu a obrigatoriedade do ensino de história e cultura afro-brasileira.",
        source: "education",
      },
      {
        title: "Agir",
        tag: "03",
        text: "Interromper o preconceito e construir respeito.",
        detail:
          "Não naturalizar piadas racistas, apoiar quem sofre discriminação e procurar a equipe escolar são atitudes concretas. A responsabilidade pelo combate ao racismo é coletiva.",
        source: "present",
      },
    ],
  },
  {
    id: "encerramento",
    chapter: 7,
    kicker: "O QUE LEVAMOS DAQUI",
    title: "O futuro também tem raízes.",
    body: "Conhecer a história é reconhecer o passado. Respeitar as diferenças é transformar o presente. Combater o racismo é construir o futuro.",
    layout: "closing",
    image: "hero",
    sources: ["november", "present"],
    notes:
      "Agradeça a presença. Convide a turma a consultar as referências e continuar aprendendo. Abra espaço para perguntas e contribuições. A apresentação pode recomeçar pelo botão ou pela tecla Home.",
  },
  {
    id: "participantes",
    chapter: 8,
    kicker: "QUEM FEZ ACONTECER",
    title: "Quem fez acontecer",
    body: "Por trás de cada história apresentada, existe uma equipe que acredita na importância de contá-la.",
    layout: "participants",
    sources: [],
    notes: "Apresente os nomes e funções reais da equipe. Os campos desta cena são placeholders editoriais e precisam ser substituídos antes da exibição pública.",
    items: [...participants].sort((a, b) => a.order - b.order).map((p): Entry => ({ title: p.name, tag: p.role, text: p.description ?? "", detail: p.description ?? "Informações da equipe ainda não fornecidas.", image: p.photo, source: "present" })),
  },
];
