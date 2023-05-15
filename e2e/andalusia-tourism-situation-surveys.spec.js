//@ts-check
import { test, expect } from'@playwright/test';

/*---------------- SOS2223-14 ----------------*/

// Gráfica conjunta

test('get analytics', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica conjunta' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*analytics/);
});

// Vídeos

test('get about', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Vídeos' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*about/);
});

// Usos/Integraciones

test('get uses and integrations', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Usos/Integraciones' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*integrations/);
});

/*---------------- ANDALUSIA-TOURISM-SITUATION-SURVEYS ----------------*/ 

// Encuesta de coyuntura turística de Andalucía

test('get andalusia tourism situation surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/andalusia-tourism-situation-surveys');

    // Click the get started link.
    await page.getByRole('link', { name: 'Encuesta de coyuntura turística de Andalucía' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*andalusia-tourism-situation-surveys/);
});

// Gráficas de coyuntura turística en Andalucía

test('get graph andalusia tourism situation surveys link', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/graph/andalusia-tourism-situation-surveys');

    // Click the get started link.
    await page.getByRole('link', { name: 'Gráfica de coyuntura turística en Andalucía' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*andalusia-tourism-situation-surveys/);
});

// Uso: IMDb Top 100 Películas

test('get imdb', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/integrations/andalusia-tourism-situation-surveys/uses/IMDb');

    // Click the get started link.
    await page.getByRole('link', { name: 'IMDb Top 100 Películas' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*IMDb/);
});

// Uso: Pokémon Go

test('get pokemon go', async ({ page }) => {
    await page.goto('https://sos2223-14.appspot.com/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo');

    // Click the get started link.
    await page.getByRole('link', { name: 'Pokémon Go' }).click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*PokemonGo/);
});

// Integración con Proxy

test('get integration with proxy', async ({ page }) => {
    await page.goto('http://sos2223-14.appspot.com/integrations/andalusia-tourism-situation-surveys/integrations/withProxy');

    await expect(page.getByText('Integración con Proxy')).toBeVisible();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*withProxy/);
});

// Integración sin Proxy

test('get integration without proxy', async ({ page }) => {
    await page.goto('http://sos2223-14.appspot.com/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy');

    await expect(page.getByText('Integración sin Proxy')).toBeVisible();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*withoutProxy/);
});