import { Page, Locator } from '@playwright/test'

export class TransactionsPage {

    constructor(public readonly page: Page) {

    }
}

export { expect } from '@playwright/test'