export interface Participant {
  name: string;
  role: string;
  description?: string;
  photo?: string;
  order: number;
}

// Replace these explicit placeholders with the team's real names and roles.
export const participants: Participant[] = [
  { name: "Nome da pessoa participante", role: "Pesquisa e conteúdo", description: "Adicionar uma breve apresentação.", order: 1 },
  { name: "Nome da pessoa participante", role: "Direção e criação", description: "Adicionar uma breve apresentação.", order: 2 },
  { name: "Nome da pessoa participante", role: "Produção e realização", description: "Adicionar uma breve apresentação.", order: 3 },
];
