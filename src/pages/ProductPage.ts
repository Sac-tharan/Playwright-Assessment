
import { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';
import { ProductData } from '../test-data/ProductData';

export class ProductPage extends BasePage {

    readonly productID: Locator;
    readonly productName: Locator;
    readonly addToCartButton: Locator;
    readonly cartBadge: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        super(page);

        this.productID = page.locator('.inventory_item_name');
        this.productName = page.locator('.inventory_item_desc');
        this.addToCartButton = page.locator('.btn_inventory');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addToCart(product: ProductData): Promise<void> {
        await this.page.locator(
            `#add-to-cart-${product.cartProductID}`
        ).click();
    }

    async openCart(): Promise<void> {
        await this.cartIcon.click();
    }
}
