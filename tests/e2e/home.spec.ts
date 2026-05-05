import { expect, test } from "@playwright/test";

test("home page renders the welcome content", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { level: 1, name: "Welcome to AfyaBridge" }),
  ).toBeVisible();
  await expect(
    page.getByText(/community health referral and follow-up platform/i),
  ).toBeVisible();
});
