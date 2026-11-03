import {Page, Locator} from '@playwright/test';
import { Environment } from '../config/Environment';

export class BasePage {
    constructor(protected page: Page) {}

    async navigateToBaseURL() {
        await this.page.goto(Environment.baseURL);
    }

    async getElement(locator: string): Promise<Locator> {
        return this.page.locator(locator);
    }   

    async clickElement(locator: string): Promise<void> {
        const element = await this.getElement(locator);
        await element.click();
    }

    async dropdownSelect(locator: string, value: string): Promise<void> {
        const element = await this.getElement(locator);
        await element.selectOption(value);
    }

    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }   

    async getPageURL(): Promise<string> {
        return this.page.url();
    }

    async goBack(): Promise<void> {
        await this.page.goBack();
    }

    async isVisible(locator: string): Promise<boolean> {
        const element = await this.getElement(locator);
        return await element.isVisible();
    }   

    async getText(locator: string): Promise<string> {
        const element = await this.getElement(locator);
        return await element.textContent() || '';
    }

    async typeText(locator: string, text: string): Promise<void> {
        const element = await this.getElement(locator);
        await element.fill(text);
    }

    async clearField(locator: string): Promise<void> {
        const element = await this.getElement(locator);
        await element.fill('');
    }

}