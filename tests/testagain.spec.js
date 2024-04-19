import { test, expect } from '@playwright/test';

test('exercise', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // Fill in login credentials and click login button
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    // Assert that the URL is correct after login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Select option 'az' from the dropdown
    await page.locator('.product_sort_container').selectOption({ value: 'az' });

    // Assert that the selected option has the value 'az'
    const selectedOptionValue = await page.locator('.product_sort_container').evaluate(option => option.value);
    await expect(selectedOptionValue).toEqual('az');
    await page.locator('.product_sort_container').selectOption({ value: 'za' });
    const selectedOptionValue2 = await page.locator('.product_sort_container').evaluate(option => option.value);
    await expect(selectedOptionValue2).toEqual('za');
    
});
