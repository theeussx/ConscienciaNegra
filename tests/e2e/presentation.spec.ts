import { test, expect } from "@playwright/test";
import { chapters, scenes } from "../../src/content/chapters";
import { participants } from "../../src/content/participants";
import { chapterStart } from "../../src/utils/navigation";

test("documento contínuo mantém os nove capítulos e permite navegação por menu", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("[data-story-scene]")).toHaveCount(scenes.length);
  await page.getByRole("button", { name: "Explorar capítulos" }).click();
  const choices = page.getByTestId("chapter-choice");
  await expect(choices).toHaveCount(9);
  expect(chapters).toHaveLength(9);

  for (let chapter = 0; chapter < chapters.length; chapter++) {
    if (chapter > 0) {
      await expect(page.getByRole("dialog")).not.toBeVisible();
      await page.getByRole("button", { name: "Explorar capítulos" }).click();
    }
    await choices.nth(chapter).click();
    const startIndex = chapterStart(scenes, chapter);
    const section = page.locator(`#${scenes[startIndex].id}`);
    await expect(section.locator("h1").first()).toBeVisible();
    await expect(page).toHaveURL(new RegExp(`#scene=${startIndex}$`));
  }
  await expect(page.locator("#participantes h1")).toHaveText("Quem fez acontecer");
});

test("rolagem manual e setas compartilham o índice narrativo", async ({ page }) => {
  await page.goto("/");
  await page.locator(`#${scenes[3].id}`).scrollIntoViewIfNeeded();
  await expect(page).toHaveURL(/#scene=3$/);
  await page.keyboard.press("ArrowRight");
  await expect(page).toHaveURL(/#scene=4$/);
  await expect(page.locator(`#${scenes[4].id} h1`)).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(page).toHaveURL(/#scene=3$/);
});

test("modo apresentador revela itens por etapa antes de avançar a cena", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Explorar capítulos" }).click();
  await page.getByRole("button", { name: /Modo apresentação/ }).click();
  await page.locator("#trajetorias").scrollIntoViewIfNeeded();
  await expect(page.locator("#trajetorias")).toHaveAttribute("data-story-index", "2");
  const first = page.locator("#trajetorias .timeline-entry").first();
  const second = page.locator("#trajetorias .timeline-entry").nth(1);
  await expect(first).not.toBeVisible();
  await expect(second).not.toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(first).toBeVisible();
  await expect(second).not.toBeVisible();
  await page.keyboard.press("Space");
  await expect(second).toBeVisible();
  await page.keyboard.press("ArrowLeft");
  await expect(second).not.toBeVisible();
});

test("modo automático permite pausar, continuar e completar a cena", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Explorar capítulos" }).click();
  await page.getByRole("button", { name: /Modo apresentação/ }).click();
  await page.locator("#trajetorias").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: /Alternar modo de revelação/ }).click();
  await expect(page.getByRole("button", { name: "Pausar revelação automática" })).toBeVisible();
  await page.getByRole("button", { name: "Pausar revelação automática" }).click();
  await expect(page.getByRole("button", { name: "Continuar revelação automática" })).toBeVisible();
  await page.getByRole("button", { name: "Completar revelações desta cena" }).click();
  await expect(page.getByRole("button", { name: /Automático, etapa 4 de 4/ })).toBeVisible();
  await page.getByRole("button", { name: "Continuar revelação automática" }).click();
});

test("modais digitam, completam, reiniciam, pausam e cancelam ao fechar", async ({ page }) => {
  await page.goto("/#scene=2");
  const opener = page.locator("#trajetorias .timeline-entry").first();
  await opener.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  const text = dialog.locator(".typewriter-text");
  const fullText = await dialog.locator(".sr-only").innerText();
  await expect.poll(async () => (await text.innerText()).length).toBeGreaterThan(0);
  expect((await text.innerText()).length).toBeLessThan(fullText.length);
  await dialog.getByRole("button", { name: "Pausar" }).click();
  await expect(dialog.getByRole("button", { name: "Continuar" })).toBeEnabled();
  await dialog.getByRole("button", { name: "Mostrar tudo" }).click();
  await expect(text).toHaveText(fullText);
  await dialog.getByRole("button", { name: "Reiniciar" }).click();
  await expect.poll(async () => (await text.innerText()).length).toBeLessThan(fullText.length);
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(opener).toBeFocused();
  await opener.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Fechar painel" }).click();
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

test("um modal bloqueia as teclas da apresentação e a seleção não mistura texto", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Explorar capítulos" }).click();
  await page.getByRole("button", { name: /Modo apresentação/ }).click();
  await page.locator("#trajetorias").scrollIntoViewIfNeeded();
  await expect(page.locator("#trajetorias")).toHaveAttribute("data-story-index", "2");
  await page.getByRole("button", { name: "Avançar revelação" }).click();
  await expect(page.locator("#trajetorias .timeline-entry").first()).toBeVisible();
  await page.locator("#trajetorias .timeline-entry").first().click();
  const dialog = page.getByRole("dialog");
  const currentIndex = await page.locator("#trajetorias").getAttribute("data-story-index");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#trajetorias")).toHaveAttribute("data-story-index", currentIndex!);
  await dialog.getByRole("button", { name: "Fechar painel" }).click();
  await expect(dialog).not.toBeVisible();
  await page.getByRole("button", { name: "Avançar revelação" }).click();
  await page.locator("#trajetorias .timeline-entry").nth(1).click();
  await expect(dialog.locator("h2")).toContainText("Palmares");
});

test("culinária, protagonismo, fontes e participantes continuam acessíveis", async ({ page }) => {
  await page.goto("/#scene=4");
  await expect(page.locator("#sabores .food-copy h2")).toHaveText("Acarajé");
  await page.locator("#sabores .food-tabs button").nth(1).click();
  await expect(page.locator("#sabores .food-copy h2")).toHaveText("Vatapá");
  await page.locator("#sabores .food-copy .text-button").click();
  await expect(page.getByRole("dialog")).toContainText("As receitas variam");
  await page.keyboard.press("Escape");

  await page.locator("#protagonistas").scrollIntoViewIfNeeded();
  const people = page.locator("#protagonistas .person");
  await expect(people).toHaveCount(6);
  for (const person of await people.all()) await expect(person).toBeVisible();
  await page.getByRole("button", { name: "Fontes e créditos" }).click();
  await expect(page.locator(".asset-credits article")).toHaveCount(10);
  await page.getByRole("button", { name: "Fechar painel" }).click();

  await page.locator("#participantes").scrollIntoViewIfNeeded();
  const names = await page.locator("#participantes .participants-list h2").allTextContents();
  expect(names).toEqual([...participants].sort((a, b) => a.order - b.order).map(p => p.name));
  await expect(page.locator("#participantes .participants-list button")).toHaveCount(participants.length);
  await page.locator("#participantes .participants-list button").first().click();
  await expect(page.getByRole("dialog")).toContainText("Pesquisa e conteúdo");
});

test("janela de notas acompanha navegação e mantém os atalhos", async ({ page }) => {
  await page.goto("/");
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Abrir notas do apresentador" }).click();
  const notes = await popupPromise;
  await expect(notes.locator("h1")).toHaveText("Uma história que vive em nós.");
  await notes.getByRole("button", { name: "Próxima cena" }).click();
  await expect(page.locator("#africas h1")).toBeVisible();
  await expect(notes.locator(".eyebrow").first()).toContainText("/ 09");
  await notes.keyboard.press("Home");
  await expect(page.locator("#abertura h1")).toBeVisible();
  await notes.close();
});

test("movimento reduzido apresenta o conteúdo imediatamente", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#scene=2");
  await page.locator("#trajetorias .timeline-entry").first().click();
  const dialog = page.getByRole("dialog");
  const fullText = await dialog.locator(".sr-only").innerText();
  await expect(dialog.locator(".typewriter-text")).toHaveText(fullText);
  await expect(dialog.locator(".typing-caret")).toHaveCount(0);
});

test("todas as cenas evitam overflow horizontal nas resoluções solicitadas", async ({ page }) => {
  test.setTimeout(120000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [width, height] of [[1920, 1080], [1366, 768], [768, 1024], [390, 844]]) {
    await page.setViewportSize({ width, height });
    await page.goto("/");
    for (const scene of scenes) {
      const section = page.locator(`#${scene.id}`);
      await section.scrollIntoViewIfNeeded();
      await expect(section.locator("h1").first()).toBeVisible();
      const metrics = await section.evaluate((node) => {
        const rect = node.getBoundingClientRect();
        return {
          viewportWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          left: rect.left + scrollX,
          right: rect.right + scrollX,
          headingRects: [...node.querySelectorAll("h1")].map(h => {
            const r = h.getBoundingClientRect();
            return { top:r.top, bottom:r.bottom, width:r.width, scrollWidth:(h as HTMLElement).scrollWidth };
          }),
        };
      });
      expect(metrics.scrollWidth, `${width}×${height}: ${scene.id}`).toBeLessThanOrEqual(width);
      expect(metrics.left).toBeGreaterThanOrEqual(-1);
      expect(metrics.right).toBeLessThanOrEqual(width + 1);
      expect(metrics.headingRects.every(r => r.scrollWidth <= r.width + 1), `${scene.id}: texto do título ultrapassa a caixa`).toBe(true);
    }
  }
});

test("offline após primeira visita preserva cenas e imagens locais", async ({ page, context }) => {
  await page.goto("/");
  await page.evaluate(async () => {
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) await new Promise<void>(resolve => navigator.serviceWorker.addEventListener("controllerchange", () => resolve(), { once:true }));
  });
  await page.reload();
  for (const scene of scenes) {
    await page.locator(`#${scene.id}`).scrollIntoViewIfNeeded();
    await page.locator(`#${scene.id} img`).evaluateAll(images => Promise.all(images.map(image => (image as HTMLImageElement).decode().catch(() => undefined))));
  }
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator("[data-story-scene]")).toHaveCount(scenes.length);
  await expect(page.locator("#participantes h1")).toHaveText("Quem fez acontecer");
  for (const scene of scenes) {
    const images = page.locator(`#${scene.id} img`);
    await page.locator(`#${scene.id}`).scrollIntoViewIfNeeded();
    await images.evaluateAll(elements => elements.forEach(image => { (image as HTMLImageElement).loading = "eager"; }));
    await images.evaluateAll(elements => Promise.all(elements.map(image => (image as HTMLImageElement).decode())));
  }
  const broken = await page.locator("img").evaluateAll(images => images.filter(image => !(image as HTMLImageElement).complete || !(image as HTMLImageElement).naturalWidth).length);
  expect(broken).toBe(0);
  await context.setOffline(false);
});
