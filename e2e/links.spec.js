//@ts-check
import { test, expect } from'@playwright/test';

test('get apartament occupancy surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica ocupación de apartamentos' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*apartment-occupancy-surveys/);
  });

  test('get hotel occupancy surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica ocupación de hoteles' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*hotel-occupancy-surveys/);
  });

  test('get andalusia tourism situation surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica coyuntura turística' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*andalusia-tourism-situation-surveys/);
  });

  test('get analytics', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica conjunta' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*analytics/);
  });

  test('get uses and integrations', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Usos/Integraciones' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*integrations/);
  });