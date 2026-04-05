import {test,expect} from '@playwright/test';

test('my test', async ({page}) => {
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/Google/);
});