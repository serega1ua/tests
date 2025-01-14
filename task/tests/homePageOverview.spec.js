const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../task/pages/homePage');
const { LoginPage } = require('../../task/pages/loginPage');

test('HomePage Overview', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  
  await test.step('Login and Go to HomePage', async () => {
    await loginPage.goto();
    await loginPage.loginUser();
    await expect(page).toHaveURL(/.*inventory\/*/);
    await page.waitForTimeout(10000);
  })

  await test.step('Check Elements on HomePage', async () => {
    await expect(homePage.cartIcon).toBeVisible();
    await expect(homePage.headerTitle).toBeVisible();
    let titleText = await homePage.headerTitle.innerText();
    await expect(titleText).toBe("Swag Labs");
    let cardProducts = await homePage.productCard.elementHandles();
    await expect(cardProducts.length).toBe(6)
  })
});
