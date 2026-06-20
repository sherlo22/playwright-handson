import { test, expect } from '@playwright/test';

test('test', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/form');
  await page.getByRole('textbox', { name: /1人目/ }).fill('項羽');
  await page.getByRole('textbox', { name: /2人目/ }).fill('劉備');
  await page.getByRole('button', { name: /シャッフル/ }).click();
  await expect(page.getByRole('status', { name: /結果/ })).toHaveText(/(項羽→劉備)|(劉備→項羽)/);

  const screenshotPath = testInfo.outputPath('screenshot.png');
  await page.screenshot({ path: screenshotPath });
  await testInfo.attach('screenshot', {
    path: screenshotPath,
    contentType: 'image/png',
  });
});