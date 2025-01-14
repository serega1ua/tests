const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.headerTitle = page.locator(".app_logo");
    this.productCard = page.locator("[data-test='inventory-item']");
    this.cartIcon = page.locator("[id='shopping_cart_container']");
    this.burgerMenuButton = page.locator("[id='react-burger-menu-btn']");
  }
};