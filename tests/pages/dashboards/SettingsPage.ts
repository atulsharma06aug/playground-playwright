import { Page, Locator } from '@playwright/test'

export class SettingPage {

    private readonly UndeliveredAndLostOrdersEmailCheckBox: Locator
    private readonly UndeliveredAndLostOrdersSlackCheckBox: Locator
    private readonly UndeliveredAndLostOrders2EmailCheckBox: Locator
    private readonly UndeliveredAndLostOrders2SlackCheckBox: Locator
    private readonly InvoiceGeneratedEmailCheckBox: Locator
    private readonly InvoiceGeneratedSlackCheckBox: Locator
    private readonly btnSaveChanges : Locator
    private readonly alertOnSaveChaneges: Locator

    constructor(public readonly page: Page) {

        this.UndeliveredAndLostOrdersEmailCheckBox = this.getToogleLocator('Undelivered and Lost orders', 'Email')
        this.UndeliveredAndLostOrdersSlackCheckBox = this.getToogleLocator('Undelivered and Lost orders', 'Slack')
        this.UndeliveredAndLostOrders2EmailCheckBox = this.getToogleLocator('Undelivered and Lost orders2', 'Email')
        this.UndeliveredAndLostOrders2SlackCheckBox = this.getToogleLocator('Undelivered and Lost orders2', 'Slack')
        this.InvoiceGeneratedEmailCheckBox = this.getToogleLocator('invoice 2', 'Email')
        this.InvoiceGeneratedSlackCheckBox = this.getToogleLocator('invoice 2', 'Slack')
        this.btnSaveChanges = this.page.getByRole('button', {name: 'Save Changes'})
        this.alertOnSaveChaneges = this.page.getByRole('alert')
    }

    private getToogleLocator(blockTitle: string, channel: 'Email' | 'Slack', ): Locator{
            return this.page.locator('h6', 
            { hasText: blockTitle })
            .locator('..')
            .locator('p', { hasText: channel })
            .locator('..')
            .locator('input[type="checkbox"]').first()
        }
    
    async getToggleONOFF(blockTitle: string, channel: 'Email' | 'Slack'){
        await this.getToogleLocator(blockTitle, channel).click()
    }

    expectResult(blockTitle:string, channel: 'Email' | 'Slack'){
        return this.getToogleLocator(blockTitle, channel)
    }
    async isChecboxIsChecked(blockTitle: string, channel: 'Email' | 'Slack'){
        return await this.getToogleLocator(blockTitle,channel).isChecked()
    }

    async openSettingPage(url: string) {
        await this.page.goto(url, {
            waitUntil: 'networkidle'
        })
    }

    async clickSaveChangesButton(){
        await this.btnSaveChanges.click()
    }
  
     
}

export { expect } from '@playwright/test'