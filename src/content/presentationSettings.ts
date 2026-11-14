/**
 * Configurações da apresentação ao vivo.
 * Ajuste aqui o ritmo da digitação e do modo automático, sem tocar nos componentes.
 */
export const presentationSettings = {
  typing: {
    /** Caracteres por segundo. 48 equivale a cerca de 8 s para um texto de 380 caracteres. */
    charsPerSecond: 48,
    /** Pausa antes de iniciar a digitação, depois da abertura do painel. */
    startDelayMs: 420,
    /** Pausa extra após ponto, exclamação e interrogação. */
    punctuationPauseMs: 240,
    /** Pausa extra após quebra de parágrafo. */
    newlinePauseMs: 380,
  },
  /** Intervalo do modo automático entre marcos narrativos. */
  autoAdvanceMs: 7500,
  /** Posição, como fração da altura da tela, onde um marco se alinha ao avançar. */
  beatAnchor: 0.24,
} as const;
