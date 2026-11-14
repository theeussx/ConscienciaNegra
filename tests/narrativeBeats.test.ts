import { describe, expect, it } from "vitest";
import { narrativeBeats } from "../src/content/narrativeBeats";
import { scenes } from "../src/content/chapters";

describe("narrative beat map", () => {
  it("declares ordered, stable milestones for every scene", () => {
    const ids = Object.values(narrativeBeats).flatMap((beats) =>
      beats.map((beat) => beat.id),
    );

    expect(Object.keys(narrativeBeats).sort()).toEqual(
      scenes.map((scene) => scene.id).sort(),
    );
    expect(ids.length).toBeGreaterThan(scenes.length);
    expect(new Set(ids).size).toBe(ids.length);
    for (const scene of scenes) {
      expect(narrativeBeats[scene.id]?.length, scene.id).toBeGreaterThan(0);
    }
  });

  it("gives the Balotelli episode its own sequential narrative moments", () => {
    const sequence = [
      ...narrativeBeats["balotelli-jogador"],
      ...narrativeBeats["balotelli-verona"],
      ...narrativeBeats["balotelli-reacao"],
      ...narrativeBeats["balotelli-reflexao"],
    ].map((beat) => beat.id);

    expect(sequence).toEqual([
      "balotelli-jogador-title",
      "balotelli-jogador-portrait",
      "balotelli-verona-date",
      "balotelli-verona-context",
      "balotelli-reacao-title",
      "balotelli-reacao-timeline",
      "balotelli-reacao-response",
      "balotelli-reflexao-question",
    ]);
  });
});
