import type { PhotoKey } from "./media";
import type { SourceId } from "./sources";

export type DetailGroup = "historia" | "cultura" | "culinaria" | "futebol" | "pessoas";

export interface DetailItem {
  kicker: string;
  title: string;
  group: DetailGroup;
  photo?: PhotoKey;
  facts?: Array<[string, string]>;
  /** Texto digitado. Parágrafos são separados por linha em branco (\n\n). */
  body: string;
  sources: SourceId[];
}

/** Conteúdos aprofundados, abertos por clique. Ordem dentro do grupo define a navegação. */
export const details = {
  "hist-palmares": {
    kicker: "Marco histórico · Alagoas",
    title: "Quilombo dos Palmares",
    group: "historia",
    photo: "serra_barriga",
    facts: [
      ["Período", "Século XVII"],
      ["Local", "Região que hoje inclui Alagoas"],
    ],
    body:
      "Palmares foi uma rede de comunidades formada por pessoas que fugiram do cativeiro. Reuniu milhares de pessoas, com agricultura, comércio e organização política própria.\n\nDurante décadas, resistiu às expedições enviadas pelo poder colonial, até a queda da fortificação na Serra da Barriga em 1694. Outros núcleos de Palmares não desapareceram imediatamente.",
    sources: ["palmares"],
  },
  "hist-zumbi": {
    kicker: "Personalidade · Século XVII",
    title: "Zumbi dos Palmares",
    group: "historia",
    photo: "zumbi_monument",
    facts: [["Morte", "20 de novembro de 1695"]],
    body:
      "Zumbi foi um dos principais líderes de Palmares e organizou a defesa do quilombo contra sucessivas investidas militares.\n\nFoi morto em 1695. Sua memória tornou-se símbolo da resistência negra no Brasil e é lembrada no 20 de novembro.",
    sources: ["palmares", "lei12519"],
  },
  "hist-dandara": {
    kicker: "Personalidade · Século XVII",
    title: "Dandara dos Palmares",
    group: "historia",
    body:
      "Dandara é uma referência na memória da resistência negra ligada a Palmares.\n\nDetalhes de sua biografia, inclusive sua relação com Zumbi, não foram comprovados na documentação do século XVII examinada por especialistas.",
    sources: ["dandara"],
  },
  "hist-lei-aurea": {
    kicker: "Marco histórico · 1888",
    title: "Lei Áurea",
    group: "historia",
    facts: [["Data", "13 de maio de 1888"]],
    body:
      "A Lei Áurea declarou extinta a escravização no Brasil. O país foi o último das Américas a abolir esse sistema.\n\nA lei, porém, não previu terra, moradia, trabalho nem escola para as pessoas recém-libertadas. As desigualdades que nasceram dessa omissão atravessaram o século XX.",
    sources: ["lei_aurea"],
  },
  "cult-maracatu": {
    kicker: "Manifestação cultural · Pernambuco",
    title: "Maracatu",
    group: "cultura",
    photo: "maracatu",
    facts: [
      ["Origem", "Recife e Olinda, Pernambuco"],
      ["Tipo", "Maracatu-nação"],
    ],
    body:
      "O maracatu-nação nasceu em Pernambuco a partir de cortejos de coroação de reis e rainhas do Congo, ligados às irmandades negras do Rosário.\n\nHoje, com batuques de baque virado, calungas e estandartes, ele ocupa as ruas do Recife e de Olinda e mantém viva a ligação com a ancestralidade.",
    sources: ["maracatu"],
  },
  "cult-capoeira": {
    kicker: "Manifestação cultural · Brasil",
    title: "Capoeira",
    group: "cultura",
    photo: "capoeira",
    facts: [["Origem", "Raízes africanas, desenvolvidas no Brasil"]],
    body:
      "A capoeira reúne luta, dança, música e jogo. Tem raízes africanas e se desenvolveu no Brasil, em meio à escravização, como forma de treino, resistência e convivência.\n\nNa roda, o ritmo do berimbau comanda os movimentos. A roda e o ofício dos mestres são reconhecidos como patrimônio cultural brasileiro; a roda de capoeira foi inscrita pela UNESCO na lista do patrimônio cultural imaterial da humanidade.",
    sources: ["unesco_cap"],
  },
  "cult-samba": {
    kicker: "Manifestação cultural · Bahia e Rio de Janeiro",
    title: "Samba",
    group: "cultura",
    photo: "samba",
    facts: [["Raiz", "Samba de roda do Recôncavo Baiano"]],
    body:
      "No Recôncavo Baiano, o samba de roda se mantém como expressão coletiva de canto, palmas e dança. Em 2005, a UNESCO o reconheceu como Obra-Prima do Patrimônio Oral e Imaterial da Humanidade.",
    sources: ["unesco_samba"],
  },
  "cult-jongo": {
    kicker: "Manifestação cultural · Sudeste",
    title: "Jongo",
    group: "cultura",
    photo: "jongo",
    facts: [["Matriz", "Bantu, de Angola e do Congo"]],
    body:
      "O jongo, também chamado de caxambu, é uma dança e um canto de origem bantu, praticado sobretudo no Sudeste brasileiro.\n\nOs pontos cantados funcionam como desafios e recados cifrados, e o tambor marca a roda. O jongo guarda memórias de ancestralidade e de comunicação entre gerações, que atravessaram a escravização.",
    sources: ["jongo"],
  },
  "cult-religioes": {
    kicker: "Religiosidades de matriz africana",
    title: "Candomblé, umbanda e outras tradições",
    group: "cultura",
    photo: "caruru",
    facts: [["Matrizes", "Iorubá, banta e jeje, entre outras"]],
    body:
      "Candomblé, umbanda e outras religiões de matriz africana preservam nomes, cantos, comidas e práticas de tradições africanas recriadas no Brasil.\n\nPor séculos, essas religiões foram perseguidas. A Constituição de 1988 garante a liberdade de crença e de culto, e elas seguem como expressões vivas de fé e identidade.",
    sources: ["religioes", "cf1988"],
  },
  "cult-linguagem": {
    kicker: "Linguagem · Português do Brasil",
    title: "Palavras que vieram da África",
    group: "cultura",
    photo: "carolina",
    facts: [["Contribuições", "Línguas banto, iorubá e outras"]],
    body:
      "Muitas palavras do português brasileiro têm origem em línguas africanas, sobretudo do grupo banto, como o quimbundo.\n\nEssas contribuições estão presentes no cotidiano, em palavras e modos de expressão. Reconhecê-las faz parte da história do português brasileiro.",
    sources: ["linguas"],
  },
  "food-acaraje": {
    kicker: "Prato · Bahia",
    title: "Acarajé",
    group: "culinaria",
    photo: "acaraje",
    facts: [
      ["Base", "Feijão-fradinho ralado, frito no azeite de dendê"],
      ["Recheio", "Vatapá, caruru, camarão seco e salada"],
    ],
    body:
      "O acarajé é um bolinho de feijão-fradinho ralado, temperado com cebola e sal e frito no azeite de dendê. O nome tem origem iorubá, ligada a àkàrà, bolinho de feijão frito.\n\nEm Salvador, ele é vendido pelas baianas de acarajé e também é oferecido aos orixás no candomblé. O ofício foi registrado pelo IPHAN como patrimônio cultural imaterial do Brasil em 2005.",
    sources: ["iphan", "alimento", "acaraje_ipac"],
  },
  "food-vatapa": {
    kicker: "Prato · Bahia",
    title: "Vatapá",
    group: "culinaria",
    photo: "vatapa",
    facts: [
      ["Base", "Pão ou farinha, leite de coco e azeite de dendê"],
      ["Ingredientes", "Camarão, amendoim e castanha-de-caju"],
    ],
    body:
      "O vatapá é um creme temperado que pode levar pão ou farinha, leite de coco, azeite de dendê, amendoim, castanha-de-caju e camarão. Seus ingredientes variam conforme a receita.\n\nEle combina técnicas e ingredientes africanos, indígenas e europeus. Em muitas receitas, é o recheio do acarajé e aparece em outros pratos da culinária baiana.",
    sources: ["iphan", "alimento"],
  },
  "food-caruru": {
    kicker: "Prato · Bahia",
    title: "Caruru",
    group: "culinaria",
    photo: "caruru",
    facts: [
      ["Base", "Quiabo, planta de origem africana"],
      ["Festa", "Cosme e Damião, 27 de setembro"],
    ],
    body:
      "O caruru pode ser preparado com quiabo, camarão seco, azeite de dendê, amendoim e castanha-de-caju. O quiabo é uma planta de origem africana, presente na culinária afro-brasileira desde o período colonial.\n\nNas festas de Cosme e Damião, o caruru é distribuído a crianças e visitantes, em tradição ligada a Ibeji, no candomblé.",
    sources: ["alimento", "caruru"],
  },
  "food-abara": {
    kicker: "Prato · Bahia",
    title: "Abará",
    group: "culinaria",
    photo: "abara",
    facts: [["Preparo", "Cozido no vapor, envolto em folhas"]],
    body:
      "O abará é um bolinho de feijão-fradinho temperado com azeite de dendê. Diferente do acarajé, ele não é frito: a massa é envolta em folhas e cozida no vapor.\n\nComo o acarajé, aparece no tabuleiro das baianas e em oferendas religiosas. A cozinha afro-brasileira é também uma forma de cuidado e de fé.",
    sources: ["iphan", "alimento"],
  },
  "fut-partida": {
    kicker: "Estudo de caso · 3 de novembro de 2019",
    title: "A partida em Verona",
    group: "futebol",
    facts: [
      ["Data", "Domingo, 3 de novembro de 2019"],
      ["Local", "Stadio Marcantonio Bentegodi, Verona (Itália)"],
      ["Resultado", "Hellas Verona 2 x 1 Brescia"],
    ],
    body:
      "O Brescia visitou o Hellas Verona pelo Campeonato Italiano (Série A). Mario Balotelli, atacante do Brescia e da seleção italiana, foi alvo de cânticos racistas vindos de um setor da torcida da casa.\n\nO episódio aconteceu durante o jogo e foi relatado pela imprensa internacional e pelos próprios jogadores.",
    sources: ["bbc1", "reuters"],
  },
  "fut-chute": {
    kicker: "Momento-chave · 9 minutos do segundo tempo",
    title: "O chute e a ameaça de sair do campo",
    group: "futebol",
    facts: [["Minuto", "9 minutos do segundo tempo"]],
    body:
      "Balotelli pegou a bola e a chutou na direção do setor de onde vinham os cânticos. Em seguida, caminhou para trás do gol e ameaçou deixar o campo.\n\nCompanheiros de equipe e adversários o convenceram a permanecer em campo.",
    sources: ["reuters", "bbc1"],
  },
  "fut-protocolo": {
    kicker: "Momento-chave · Protocolo antirracismo",
    title: "A partida é interrompida",
    group: "futebol",
    facts: [
      ["Árbitro", "Maurizio Mariani"],
      ["Paralisação", "Cerca de 4 minutos"],
    ],
    body:
      "O árbitro Maurizio Mariani interrompeu o jogo e iniciou o protocolo antirracismo. Um aviso no alto-falante do estádio alertou que a partida poderia ser suspensa por mais tempo se os cânticos continuassem.\n\nA bola voltou a rolar após cerca de quatro minutos de paralisação.",
    sources: ["reuters", "bbc1"],
  },
  "fut-gol": {
    kicker: "Desfecho do jogo",
    title: "Um gol e uma derrota",
    group: "futebol",
    facts: [
      ["Gol de Balotelli", "85 minutos"],
      ["Placar final", "Verona 2 x 1 Brescia"],
    ],
    body:
      "Mesmo depois do desgaste, Balotelli marcou um belo gol aos 85 minutos. O Brescia não conseguiu o empate e perdeu por 2 a 1.\n\nO treinador do Verona, Ivan Juric, afirmou após a partida que não houve cânticos racistas. O Brescia criticou a tentativa de negar ou minimizar a gravidade do caso.",
    sources: ["bbc1", "reuters"],
  },
  "fut-punicoes": {
    kicker: "Consequências documentadas",
    title: "Punições e medidas",
    group: "futebol",
    facts: [
      ["Clube", "Hellas Verona"],
      ["Estádio", "Sanção alterada após recurso"],
    ],
    body:
      "O Verona baniu o líder do grupo ultras, Luca Castellini, por 11 anos. Ele havia afirmado que Balotelli 'nunca poderá ser completamente italiano'.\n\nA comissão disciplinar da Série A determinou o fechamento parcial do estádio, no setor Poltrone Est, por uma partida. A decisão foi tomada dois dias depois do jogo. Após recurso, a sanção foi limitada ao setor 8 e suspensa condicionalmente por um ano.",
    sources: ["bbc2", "balotelli_recurso"],
  },
  "fut-reacoes": {
    kicker: "Repercussão",
    title: "Reações e debate",
    group: "futebol",
    facts: [["Entidade", "Fare, rede europeia de combate ao racismo no futebol"]],
    body:
      "Balotelli publicou no Instagram vídeos dos cânticos e escreveu 'Vergonha de vocês' (tradução livre). Ele também agradeceu a solidariedade de colegas e torcedores.\n\nA Fare elogiou a atitude de Balotelli e questionou por que colegas o pediram para seguir jogando em vez de se solidarizar com ele. Para a entidade, o problema na Itália era grande e a resposta das autoridades, insuficiente.",
    sources: ["bbc1"],
  },
  "fut-vinicius": {
    kicker: "Caso documentado · 21 de maio de 2023",
    title: "Vinícius Júnior no Mestalla",
    group: "futebol",
    photo: "vinicius",
    facts: [
      ["Partida", "Valencia x Real Madrid, LaLiga"],
      ["Local", "Mestalla, Valência (Espanha)"],
    ],
    body:
      "Durante a partida, o jogo foi interrompido depois que Vinícius Júnior relatou que um torcedor o chamou de macaco e fez gestos semelhantes. Ele chegou a considerar deixar o campo e acabou expulso após um confronto com jogadores do Valencia.\n\nDias depois, a polícia espanhola prendeu três pessoas, que foram liberadas após depoimento. A federação anulou o cartão vermelho. Inicialmente, determinou o fechamento parcial do estádio por cinco jogos e multa de 45 mil euros; em recurso, reduziu as sanções para três jogos e 27 mil euros.",
    sources: ["efe_vini", "vinicius_recurso"],
  },
  "fut-richarlison": {
    kicker: "Caso documentado · 27 de setembro de 2022",
    title: "Richarlison em Paris",
    group: "futebol",
    photo: "richarlison",
    facts: [
      ["Partida", "Brasil x Tunísia, amistoso"],
      ["Placar", "Brasil 5 x 1 Tunísia"],
    ],
    body:
      "Ao comemorar o segundo gol do Brasil, Richarlison teve uma banana arremessada em sua direção da arquibancada. Um companheiro retirou o objeto do gramado.\n\nA CBF repudiou qualquer manifestação de preconceito, e a Fifa anunciou investigação. Richarlison escreveu que o racismo continuaria enquanto não houvesse punição e que acontece 'todos os dias e em todo lugar' (tradução livre). Antes do jogo, os jogadores brasileiros haviam exibido uma faixa em resposta aos ataques sofridos por Vinícius Júnior.",
    sources: ["cnn_rich", "bbc_rich"],
  },
  "pess-machado": {
    kicker: "Personalidade · Literatura",
    title: "Machado de Assis",
    group: "pessoas",
    photo: "machado",
    facts: [
      ["Vida", "1839 a 1908"],
      ["Marco", "Fundador da Academia Brasileira de Letras, em 1897"],
    ],
    body:
      "Nascido no Rio de Janeiro, em família pobre, Machado de Assis começou a trabalhar cedo como aprendiz de tipógrafo. Tornou-se um dos maiores escritores da língua portuguesa.\n\nEm obras como Memórias Póstumas de Brás Cubas e Dom Casmurro, observou com ironia a sociedade escravocrata e seus preconceitos.",
    sources: ["abl"],
  },
  "pess-carolina": {
    kicker: "Personalidade · Literatura e memória",
    title: "Carolina Maria de Jesus",
    group: "pessoas",
    photo: "carolina",
    facts: [
      ["Vida", "1914 a 1977"],
      ["Obra", "Quarto de despejo (1960)"],
    ],
    body:
      "Nascida em Sacramento, Minas Gerais, Carolina Maria de Jesus viveu na favela do Canindé, em São Paulo. Catava papel para sustentar os filhos.\n\nEm seu diário, publicado em 1960 como Quarto de despejo, descreveu a fome, a violência e a desigualdade do cotidiano. O livro tornou-se um marco da literatura brasileira e foi traduzido para vários idiomas.",
    sources: ["carolina_bio"],
  },
  "pess-luiz-gama": {
    kicker: "Personalidade · Abolicionismo",
    title: "Luiz Gama",
    group: "pessoas",
    photo: "luiz_gama",
    facts: [
      ["Vida", "1830 a 1882"],
      ["Atuação", "Advogado autodidata e abolicionista"],
    ],
    body:
      "Nascido livre em Salvador, Luiz Gama foi vendido como escravizado pelo próprio pai, quando era criança. Recuperou a liberdade e aprendeu a ler e escrever com a ajuda de Antônio Rodrigues do Prado Júnior.\n\nAtuou como advogado sem diploma de bacharel em direito e usou a lei como arma: atuou pela liberdade de pessoas escravizadas nos tribunais.",
    sources: ["gama"],
  },
  "pess-milton": {
    kicker: "Personalidade · Geografia",
    title: "Milton Santos",
    group: "pessoas",
    photo: "milton_santos",
    facts: [
      ["Vida", "1926 a 2001"],
      ["Reconhecimento", "Prêmio Vautrin Lud (1994)"],
    ],
    body:
      "Geógrafo baiano, nascido em Brotas de Macaúbas, Milton Santos estudou como o espaço é produzido pela desigualdade social, pela técnica e pelo poder.\n\nRecebeu o Prêmio Vautrin Lud em 1994, um reconhecimento internacional na área. Sua obra pensa a globalização a partir do Sul do mundo e das populações das cidades periféricas.",
    sources: ["milton"],
  },
  "pess-conceicao": {
    kicker: "Personalidade · Literatura",
    title: "Conceição Evaristo",
    group: "pessoas",
    photo: "conceicao",
    facts: [
      ["Nascimento", "1946, Belo Horizonte"],
      ["Conceito", "Escrevivência"],
    ],
    body:
      "Escritora mineira, Conceição Evaristo criou o conceito de escrevivência: uma escrita que nasce da experiência de vida de mulheres negras, da rua, da cozinha e da memória familiar.\n\nSeus romances e contos, como Ponciá Vicêncio e Olhos d'água, dão voz a personagens que a literatura tradicional costumava silenciar.",
    sources: ["conceicao"],
  },
  "pess-pele": {
    kicker: "Personalidade · Esporte",
    title: "Pelé",
    group: "pessoas",
    photo: "pele",
    facts: [
      ["Vida", "1940 a 2022"],
      ["Títulos", "Copas do Mundo de 1958, 1962 e 1970"],
    ],
    body:
      "Edson Arantes do Nascimento, o Pelé, nasceu em Três Corações, Minas Gerais, e se tornou um dos maiores jogadores da história. Foi tricampeão mundial com a seleção brasileira.\n\nSua trajetória mostra o talento de um menino negro que venceu a pobreza e levou o nome do Brasil ao mundo. Ao longo da carreira, também enfrentou o racismo.",
    sources: ["pele"],
  },
} satisfies Record<string, DetailItem>;

export type DetailId = keyof typeof details;

/** Itens anterior e seguinte dentro do mesmo grupo temático, para troca rápida no diálogo. */
export function siblingsOf(id: DetailId): { prev: DetailId | null; next: DetailId | null } {
  const group = details[id].group;
  const ids = (Object.keys(details) as DetailId[]).filter((key) => details[key].group === group);
  const index = ids.indexOf(id);
  return {
    prev: index > 0 ? ids[index - 1] : null,
    next: index >= 0 && index < ids.length - 1 ? ids[index + 1] : null,
  };
}
