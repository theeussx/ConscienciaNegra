import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { scenes } from "../../src/content/chapters";

test("capítulos, mapa e diálogos passam verificações WCAG AA", async ({ page }) => {
  test.setTimeout(180000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  for (const scene of scenes) {
    const section = page.locator(`#${scene.id}`);
    await section.scrollIntoViewIfNeeded();
    await expect(section.locator("h1").first()).toBeVisible();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations, `Capítulo/cena ${scene.id}`).toEqual([]);
  }

  await page.getByRole("button", { name: "Explorar capítulos" }).click();
  const mapResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(mapResult.violations).toEqual([]);
  await page.getByRole("button", { name: "Fechar painel" }).click();

  await page.locator("#trajetorias .timeline-entry").nth(1).click();
  const dialogResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(dialogResult.violations).toEqual([]);
});
