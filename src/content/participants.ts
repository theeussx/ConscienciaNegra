export interface Participant {
  id: string;
  name: string;
  role: string;
  description?: string;
  /** Caminho da imagem dentro de public, por exemplo /images/participantes/mateus.jpg. */
  photo?: string;
  /** Descrição opcional para leitores de tela; por padrão, usa o nome. */
  photoAlt?: string;
  /** Posição do retrato no quadro, por exemplo "center top". */
  photoPosition?: string;
  /** Endereço completo do portfólio, incluindo https://. */
  portfolioUrl?: string;
}

/**
 * Dados reais ainda não disponíveis: os itens abaixo são placeholders.
 * Edite os campos abaixo; adicione ou remova objetos para ajustar a quantidade.
 * Para incluir uma foto, salve-a em public/images/participantes e acrescente,
 * por exemplo: photo: "/images/participantes/mateus.jpg".
 */
export const participants: Participant[] = [
  { id: "p01", name: "Mateus Henrique", role: "Desenvolvedor, designer e apresentador da palestra final", description: "Desenvolvedor e designer da aplicação web. Responsável pelo guiamento do site.", photo: "/images/participantes/mateus.webp", portfolioUrl: "https://theeussx.online/" },
  { id: "p02", name: "Arthur Felipe", role: "Apresentador do capitulo 5", description: "Racismo no futebol", photo: "/images/participantes/arthur.webp", portfolioUrl: "https://arthurdevstudio.online" },
  { id: "p03", name: "Matheus Braga", role: "Apresentador do capitulo 6", description: "A África que vive no Brasil", photo: "/images/participantes/matheus.jpeg", },
  { id: "p04", name: "Isaac Magno", role: "Apresentador do capitulo 2", description: "Descrição a ser preenchida.", photo: "/images/participantes/isaac.webp", },
  { id: "p05", name: "Lucas Henrique", role: "Apresentador do capitulo 7", description: "A consciência negra é compromisso do presente.", photo: "/images/participantes/lucas.jpeg", },
  { id: "p06", name: "Ana Julia", role: "Apresentadora do capitulo 4", description: "Sabores que contam histórias.", photo: "/images/participantes/ana.jpeg", },
  { id: "p07", name: "Ayne Maysa", role: "Apresentadora do capitulo 7", description: "A consciência negra é compromisso do presente.", photo: "/images/participantes/ayne.jpeg" },
  { id: "p08", name: "Jamilly Chayani", role: "Apresentadora do capitulo 3", description: "A África que vive no Brasil", photo: "/images/participantes/jamilly.jpeg" },
];
