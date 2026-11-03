import {Page,Locator} from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');  
    }

    async login(username: string, password: string): Promise<void> {
        await this.typeText('#user-name', username);
        await this.typeText('#password', password);
        await this.clickElement('#login-button');   
    }

    async getErrorMessage(): Promise<string> {
        return await this.getText('[data-test="error"]');
    }
}