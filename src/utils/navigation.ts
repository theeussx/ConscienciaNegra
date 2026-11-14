export function navigate(index: number, delta: number, total: number): number {
  return Math.max(0, Math.min(total - 1, index + delta));
}
export function chapterStart(
  scenes: readonly { chapter: number }[],
  chapter: number,
): number {
  return Math.max(
    0,
    scenes.findIndex((s) => s.chapter === chapter),
  );
}
export function parseScene(value: unknown, total: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? navigate(0, Math.trunc(n), total) : 0;
}
