
const { test, expect } = require('@playwright/test');
const data = require('../Data/data.json')
const {Fill} = require('../POM/Browser/Browser.js')
const {EmailInputBox, PasswordInputBox} = require('../POM/PageObjects/HomePageObject.js')


test('E2E', async ({ page }) => {

  // Go to https://www.google.com/
  await page.goto(data.Target.URL);

  // enter the email address to the eail input box
  await Fill(page, EmailInputBox(), data.TextBox.Email)
 // enter the password to password input box
  await Fill(page, PasswordInputBox(), data.TextBox.Password)
 // Click on ubmit button
  await page.frameLocator('iframe[title="sweet-shockley-z3t0c9"]').getByRole('button', { name: 'Submit' }).click();

    // Verify password is of type password
    await expect(page.frameLocator('iframe[title="sweet-shockley-z3t0c9"]').locator('input[type="password"]')).toHaveAttribute('type', 'password');
    // verify entered email is a valid email.

})

/*module.exports = {
  check box,
};*/
