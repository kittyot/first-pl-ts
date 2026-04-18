import { test, expect } from '@playwright/test';

test('my test',{ tag:['@smoke'] }, async ({page}) => {
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/Google/);
});


test('failed test', async ({page}) => {
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/Fail/);
});