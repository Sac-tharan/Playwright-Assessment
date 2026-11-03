
import { test, expect } from '../../../src/fixtures/testFixtures';
import { Environment } from '../../../src/config/Environment';
import { ProductData } from '../../../src/test-data/ProductData';

test.describe('Cart Page Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigateToBaseURL();
        await loginPage.login(
            Environment.Username,
            Environment.Password
        );
    });

    test('Add 2 products to cart', async ({
        productPage,
        cartPage
    }) => {

        const product1 = ProductData[0];
        const product2 = ProductData[1];

        // Add products
        await productPage.addToCart(product1);
        await productPage.addToCart(product2);

        // Verify cart badge
        await expect(productPage.cartBadge).toHaveText('2');

        // Open cart
        await productPage.openCart();

        // Verify cart items count
        await expect(cartPage.cartItems).toHaveCount(2);

        // Verify product names
        await expect(
            cartPage.cartItem(product1.productName)
        ).toBeVisible();

        await expect(
            cartPage.cartItem(product2.productName)
        ).toBeVisible();

    });

});
