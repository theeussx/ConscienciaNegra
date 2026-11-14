import { describe, expect, it } from "vitest";
import { advanceTypewriter, createTypewriter, segmentGraphemes } from "./useTypewriter";
import { pickNextBeatIndex, pickPrevBeatIndex } from "./usePresentation";
import { chapters } from "../content/chapters";
import { details, siblingsOf, type DetailId } from "../content/details";
import { sources } from "../content/sources";

describe("segmentGraphemes", () => {
  it("mantém letras acentuadas e emojis compostos como unidades inteiras", () => {
    expect(segmentGraphemes("ção")).toHaveLength(3);
    expect(segmentGraphemes("👩🏿‍🔬")).toHaveLength(1);
  });
});

describe("advanceTypewriter", () => {
  it("respeita o atraso inicial e o ritmo de caracteres", () => {
    let state = createTypewriter("abcd", { charsPerSecond: 10, startDelayMs: 100 });
    state = advanceTypewriter(state, 100);
    expect(state.index).toBe(0);
    state = advanceTypewriter(state, 250);
    expect(state.index).toBe(2);
  });

  it("completa ao chegar ao fim do texto", () => {
    let state = createTypewriter("ab", { charsPerSecond: 100, startDelayMs: 0 });
    state = advanceTypewriter(state, 1000);
    expect(state.status).toBe("done");
    expect(state.index).toBe(2);
  });

  it("não avança quando pausado", () => {
    const state = { ...createTypewriter("abc", { charsPerSecond: 100, startDelayMs: 0 }), status: "paused" as const };
    expect(advanceTypewriter(state, 500)).toBe(state);
  });

  it("aplica pausa extra depois de pontuação", () => {
    const options = { charsPerSecond: 10, startDelayMs: 0, punctuationPauseMs: 300, newlinePauseMs: 0 };
    let state = createTypewriter("a.b", options);
    state = advanceTypewriter(state, 100);
    expect(state.index).toBe(1);
    state = advanceTypewriter(state, 100);
    expect(state.index).toBe(1);
    state = advanceTypewriter(state, 300);
    expect(state.index).toBe(2);
  });

  it("entrega o texto completo imediatamente no modo de movimento reduzido", () => {
    expect(createTypewriter("texto", {}, true).status).toBe("done");
  });
});

describe("marcos narrativos", () => {
  it("escolhe o próximo marco abaixo da âncora", () => {
    expect(pickNextBeatIndex([-300, 50, 400], 200)).toBe(2);
    expect(pickNextBeatIndex([-300, 100], 200)).toBe(-1);
  });

  it("escolhe o marco anterior acima da âncora", () => {
    expect(pickPrevBeatIndex([-300, 50, 400], 200)).toBe(1);
    expect(pickPrevBeatIndex([300], 200)).toBe(-1);
  });
});

describe("conteúdo", () => {
  it("todas as fontes citadas existem no registro", () => {
    for (const item of Object.values(details)) {
      for (const id of item.sources) {
        expect(sources[id]).toBeDefined();
      }
    }
  });

  it("há nove capítulos com identificadores únicos", () => {
    expect(chapters).toHaveLength(9);
    expect(new Set(chapters.map((chapter) => chapter.id)).size).toBe(9);
  });

  it("a navegação entre itens de um mesmo tema aponta para itens válidos", () => {
    for (const id of Object.keys(details) as DetailId[]) {
      const { prev, next } = siblingsOf(id);
      if (prev) expect(details[prev].group).toBe(details[id].group);
      if (next) expect(details[next].group).toBe(details[id].group);
    }
  });
});
