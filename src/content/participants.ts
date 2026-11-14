import type { PhotoKey } from "./media";

export interface Participant {
  id: string;
  name: string;
  role: string;
  description?: string;
  /** Fotografia opcional. Sem foto, um quadro neutro é exibido. */
  photo?: PhotoKey;
}

/**
 * Dados reais ainda não disponíveis: os itens abaixo são placeholders.
 * Substitua nomes, funções e descrições quando as informações forem confirmadas.
 */
export const participants: Participant[] = [
  { id: "p01", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
  { id: "p02", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
  { id: "p03", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
  { id: "p04", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
  { id: "p05", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
  { id: "p06", name: "Nome a definir", role: "Função a definir", description: "Descrição a ser preenchida." },
];
