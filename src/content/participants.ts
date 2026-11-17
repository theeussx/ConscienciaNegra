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
  { id: "p01", name: "Mateus Henrique", role: "Desenvolvedor/Designer", description: "Desenvolvedor e designer da aplicação web.", photo: "/images/participantes/mateus.webp", portfolioUrl: "https://theeussx.vercel.app/" },
  { id: "p02", name: "Arthur Felipe", role: "Função a definir", description: "Descrição a ser preenchida.", photo: "/images/participantes/arthur.webp", portfolioUrl: "https://arthurdevstudio.online" },
  { id: "p03", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida.", photo: "/images/participantes/" },
  { id: "p04", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida.", photo: "/images/participantes/" },
  { id: "p05", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida.", photo: "/images/participantes/" },
  { id: "p06", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida.", photo: "/images/participantes/" },
];
