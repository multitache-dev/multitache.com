import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // On s'attend à ce que la page contienne un titre (h1 ou balise title) avec "Keystatic"
  // Vous pouvez ajuster cette assertion en fonction du contenu réel de votre page d'accueil
  await expect(page.locator('h1')).toContainText(/Keystatic/);
});
