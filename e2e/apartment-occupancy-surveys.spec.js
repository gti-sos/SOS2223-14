//@ts-check
import { test, expect } from'@playwright/test';

test('get apartament occupancy surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/apartment-occupancy-surveys');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Encuesta de ocupación de apartamentos' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*apartment-occupancy-surveys/);
  });

  test('get graph apartament occupancy surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/graph/apartment-occupancy-surveys');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica ocupación de apartamentos' }).click();
  
    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*apartment-occupancy-surveys/);
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

  test('Pruebas e2e apartment-occupancy-surveys', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/apartment-occupancy-surveys');
  await page.getByRole('button', { name: 'Página siguiente' }).click();
  await page.getByRole('button', { name: 'Página anterior' }).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().press('CapsLock');
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().fill('S');
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().press('CapsLock');
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().fill('Sevilla');
  await page.getByRole('button', { name: 'Buscar dato' }).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').nth(1).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').nth(1).fill('2022');
  await page.getByRole('button', { name: 'Buscar dato' }).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').first().fill('');
  await page.getByRole('button', { name: 'Buscar dato' }).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').nth(1).click();
  await page.getByRole('row', { name: 'Buscar dato' }).getByRole('textbox').nth(1).fill('');
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().click();
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().fill('2021');
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().press('Tab');
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').nth(1).fill('2022');
  await page.getByRole('button', { name: 'Buscar intervalo' }).click();
  await page.getByText('Intervalo encontrado Encuesta de ocupación de apartamentos Datos devueltos: 10 I').click();
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().click();
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().fill('');
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').first().press('Tab');
  await page.getByRole('row', { name: 'Buscar intervalo' }).getByRole('textbox').nth(1).fill('');
  await page.getByPlaceholder('Provincia').click();
  await page.getByPlaceholder('Provincia').press('CapsLock');
  await page.getByPlaceholder('Provincia').fill('S');
  await page.getByPlaceholder('Provincia').press('CapsLock');
  await page.getByPlaceholder('Provincia').fill('Sevilla');
  await page.getByPlaceholder('Provincia').press('Tab');
  await page.getByPlaceholder('Año').fill('2023');
  await page.getByPlaceholder('Año').press('Tab');
  await page.getByPlaceholder('Turista').fill('1');
  await page.getByPlaceholder('Turista').press('Tab');
  await page.getByPlaceholder('Pernoctacion media').fill('1');
  await page.getByPlaceholder('Pernoctacion media').press('Tab');
  await page.getByPlaceholder('Estancia media').fill('1');
  await page.getByRole('button', { name: 'Crear dato' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Borrar todo' }).click();
  await page.getByRole('button', { name: 'Recargar datos' }).click();
  });