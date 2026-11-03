import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class CartPage extends BasePage {

    readonly cartItems: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        super(page);

        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    cartItem(productName: string): Locator {
        return this.page.locator(
            `.cart_item:has-text("${productName}")`
        );
    }

    async removeProductFromCart(productName: string): Promise<void> {
        const removeButton = this.cartItem(productName)
            .locator('button:has-text("Remove")');

        await removeButton.click();
    }

    async proceedToCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async getCartItemsCount(): Promise<number> {
        return await this.cartItems.count();
    }
}