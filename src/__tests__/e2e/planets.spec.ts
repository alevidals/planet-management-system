import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("should create a new planet and navigate into the planet view", async ({
  page,
}) => {
  await page.getByRole("link", { name: "View planets" }).click();
  await page.getByRole("button", { name: "Add planet" }).click();

  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("SeedTag");
  await page.getByLabel("Diameter").click();
  await page.getByLabel("Diameter").fill("1000");
  await page.locator('input[name="climates.0.climate"]').click();
  await page.locator('input[name="climates.0.climate"]').fill("arid");
  await page.locator('input[name="terrains.0.terrain"]').click();
  await page.locator('input[name="terrains.0.terrain"]').fill("desert");
  await page.getByRole("button", { name: "Save changes" }).click();

  await page
    .getByRole("heading", { name: "SeedTag" })
    .waitFor({ state: "visible" });

  const isVisible = await page
    .getByRole("heading", { name: "SeedTag" })
    .isVisible();

  expect(isVisible).toBe(true);
});

test("should filter by deserts terrains", async ({ page }) => {
  await page.getByRole("link", { name: "View planets" }).click();
  await page.getByRole("button", { name: "Show filters" }).click();

  await page.getByPlaceholder("Search planets").click();
  await page.getByPlaceholder("Search planets").fill("deserts");

  await page.getByText("deserts").first().waitFor({ state: "visible" });

  const numberOfCards = await page.locator(".text-card-foreground").count();

  expect(numberOfCards).toBe(8);
});

test("should create a new planet and show it on the list", async ({ page }) => {
  await page.getByRole("link", { name: "View planets" }).click();
  await page.getByRole("button", { name: "Add planet" }).click();

  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("SeedTag");
  await page.getByLabel("Diameter").click();
  await page.getByLabel("Diameter").fill("1000");
  await page
    .getByText("NameDiameterClimatesTerrainsResidentsSave changes")
    .click();
  await page.locator('input[name="climates.0.climate"]').fill("arid");
  await page.locator('input[name="terrains.0.terrain"]').click();
  await page.locator('input[name="terrains.0.terrain"]').fill("desert");
  await page.getByRole("button", { name: "Save changes" }).click();

  await page
    .getByRole("link", { name: "Planets" })
    .waitFor({ state: "visible" });
  await page.getByRole("link", { name: "Planets" }).click();

  await page.getByRole("button", { name: "Show filters" }).click();

  await page.getByPlaceholder("Search planets").click();
  await page.getByPlaceholder("Search planets").fill("SeedTag");

  await page.getByText("SeedTag").first().waitFor({ state: "visible" });

  const isVisible = await page.getByText("SeedTag").isVisible();

  expect(isVisible).toBe(true);
});

test("should show a specific message if user navigate to a non-existing page", async ({
  page,
}) => {
  await page.goto("/planets?page=1000");

  await page
    .getByText(
      `"Looks like you've traveled too far into the Unknown Regions of our search galaxy! Navigate back to familiar territories or use the Force to refine your search coordinates. Remember, even Jedi must stay within the boundaries of our search database." 🌌✨`,
    )
    .waitFor({
      state: "visible",
    });

  const isVisible = await page
    .getByText(
      `"Looks like you've traveled too far into the Unknown Regions of our search galaxy! Navigate back to familiar territories or use the Force to refine your search coordinates. Remember, even Jedi must stay within the boundaries of our search database." 🌌✨`,
    )
    .isVisible();

  expect(isVisible).toBe(true);
});
