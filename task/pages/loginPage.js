const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator("[data-test='username']");
    this.userPassword = page.locator("#password");
    this.userLoginButton = page.locator("[id='login-button']");
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async loginUser() {
    await this.userNameField.type("standard_user");
    await this.userPassword.type("secret_sauce");
    await this.userLoginButton.click();
  }
};