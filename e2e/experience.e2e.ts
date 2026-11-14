import { expect, test, type Page } from "@playwright/test";

const TYPED_SNIPPET = "O maracatu-nação nasceu em Pernambuco";

async function openFirstStation(page: Page) {
  await page.locator("#cap-03").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Abrir a contextualização" }).first().click();
}

test("carrega os nove capítulos sem erros de execução", async ({ page }) => {
  const problems: string[] = [];
  page.on("pageerror", (error) => problems.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) {
      problems.push(message.text());
    }
  });
  await page.goto("/");
  await expect(page.locator("section[data-chapter]")).toHaveCount(9);
  await expect(page.getByRole("heading", { level: 1, name: "RAÍZES" })).toBeVisible();
  expect(problems).toEqual([]);
});

test("revela o conteúdo ao rolar e mantém o que já apareceu ao voltar", async ({ page }) => {
  await page.goto("/");
  const firstEvent = page.locator('[data-event="0"] [data-beat]').first();
  await expect(firstEvent).toHaveCSS("opacity", "0");
  await page.locator('[data-event="0"]').scrollIntoViewIfNeeded();
  await expect(firstEvent).toHaveCSS("opacity", "1");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(firstEvent).toHaveCSS("opacity", "1");
});

test("seta para baixo avança para o próximo marco narrativo", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#cap-01-title")).toBeVisible();
  const before = await page.evaluate(() => window.scrollY);
  await page.keyboard.press("ArrowDown");
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(before);
});

test("diálogo abre, digita, fecha com Escape e devolve o foco ao botão de origem", async ({ page }) => {
  await page.goto("/");
  await openFirstStation(page);
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.locator("#detail-title")).toHaveText("Maracatu");
  await page.getByRole("button", { name: "Completar texto" }).click();
  await expect(dialog).toContainText(TYPED_SNIPPET);
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Abrir a contextualização" }).first()).toBeFocused();
});

test("troca rápida: outro item do mesmo tema substitui o conteúdo sem misturar textos", async ({ page }) => {
  await page.goto("/");
  await openFirstStation(page);
  await expect(page.locator("#detail-title")).toHaveText("Maracatu");
  await page.getByRole("button", { name: "Capoeira →" }).click();
  await expect(page.locator("#detail-title")).toHaveText("Capoeira");
  await expect(page.getByRole("dialog")).not.toContainText("O maracatu-nação nasceu");
});

test("movimento reduzido: o texto aparece completo de imediato", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();
  await page.goto("http://localhost:4173/");
  await openFirstStation(page);
  await expect(page.getByRole("dialog")).toContainText(TYPED_SNIPPET);
  await expect(page.getByRole("button", { name: "Pausar" })).toBeDisabled();
  await context.close();
});

test("menu de capítulos leva ao capítulo escolhido", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Capítulos" }).click();
  await page.getByRole("button", { name: /06 Protagonismo negro/ }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("#cap-06-title")).toBeInViewport();
});

test("modo automático pode ser ligado e desligado", async ({ page }) => {
  await page.goto("/");
  const auto = page.getByRole("button", { name: "Automático" });
  await auto.click();
  await expect(auto).toHaveAttribute("aria-pressed", "true");
  await auto.click();
  await expect(auto).toHaveAttribute("aria-pressed", "false");
});

test("participantes aparecem com placeholders e créditos finais", async ({ page }) => {
  await page.goto("/");
  await page.locator("#cap-09").scrollIntoViewIfNeeded();
  await expect(page.getByText("Nome a definir")).toHaveCount(6);
  await expect(page.getByRole("heading", { name: "Créditos das imagens" })).toBeAttached();
});

test("funciona sem acesso à rede externa", async ({ page }) => {
  await page.route("**/*", (route) => {
    const url = route.request().url();
    return url.startsWith("http://localhost") ? route.continue() : route.abort();
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1, name: "RAÍZES" })).toBeVisible();
  await expect(page.locator("section[data-chapter]")).toHaveCount(9);
});

test("botões de aprofundamento não são cobertos por outros elementos", async ({ page }) => {
  await page.goto("/");
  const triggers = page.locator("button.detail-trigger");
  const total = await triggers.count();
  expect(total).toBeGreaterThanOrEqual(20);
  for (let i = 0; i < Math.min(total, 8); i += 1) {
    await triggers.nth(i).click({ trial: true });
  }
});
