// @ts-check
const { test, expect } = require('@playwright/test');

async function Click(page, element){
    await page.frameLocator('iframe[title="sweet-shockley-z3t0c9"]').locator(element).click();
}

async function Fill(page, element, content){
    await page.frameLocator('iframe[title="sweet-shockley-z3t0c9"]').locator(element).fill(content);
}

module.exports = {
    Click,
    Fill
};