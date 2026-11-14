import { describe, it, expect } from "vitest";
import { navigate, chapterStart, parseScene } from "../src/utils/navigation";
describe("navegação de palco", () => {
  it("mantém início e final nos limites", () => {
    expect(navigate(0, -1, 14)).toBe(0);
    expect(navigate(13, 1, 14)).toBe(13);
  });
  it("preserva todos os comandos rápidos sem sair dos limites", () => {
    let i = 0;
    for (let n = 0; n < 100; n++) i = navigate(i, 1, 14);
    expect(i).toBe(13);
    for (let n = 0; n < 100; n++) i = navigate(i, -1, 14);
    expect(i).toBe(0);
  });
  it("salta ao início do capítulo e lida com destinos inválidos", () => {
    expect(
      chapterStart([{ chapter: 0 }, { chapter: 1 }, { chapter: 1 }], 1),
    ).toBe(1);
    expect(chapterStart([{ chapter: 0 }], 99)).toBe(0);
  });
  it("rejeita índices corrompidos de janela e URL", () => {
    expect(parseScene("99", 14)).toBe(13);
    expect(parseScene("garbage", 14)).toBe(0);
    expect(parseScene("-4", 14)).toBe(0);
    expect(parseScene("Infinity", 14)).toBe(0);
  });
});
