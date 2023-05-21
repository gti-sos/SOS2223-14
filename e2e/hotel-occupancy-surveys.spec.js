//@ts-check
import { test, expect } from'@playwright/test';

// Acceder a la página de ocupación hotelera
test('get hotel occupancy surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/hotel-occupancy-surveys');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Encuesta de ocupación hotelera' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*hotel-occupancy-surveys/);
  });

// Acceder a usos/integraciones
test('get uses and integrations', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Usos/Integraciones' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*integrations/);
});

// Visualización de la gráfica conjunta
test('get analytics', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica conjunta' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*analytics/);
});