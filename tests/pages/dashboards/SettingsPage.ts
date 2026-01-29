import {Page, Locator} from '@playwright/test'

export class SettingPage{

    private readonly UndeliveredAndLostOrdersEmailCheckBox: Locator
    private readonly UndeliveredAndLostOrdersSlackCheckBox: Locator

    constructor(public readonly page: Page){
        this.UndeliveredAndLostOrdersEmailCheckBox = this.page.locator('div', {
            has: this.page.locator('p', { hasText: 'Email' })
        }).getByRole('checkbox').first()

        this.UndeliveredAndLostOrdersSlackCheckBox = this.page.locator('div',{
            has: this.page.locator('p', {hasText: 'Slack'})
        }).getByRole('checkbox').nth(1)
    }

    async openSettingPage(url: string){
        await this.page.goto(url, {
            waitUntil: 'networkidle'
        })
    }

    async enableDisableUndeliveredAndLostOrdersEmailNotification(){
        await this.UndeliveredAndLostOrdersEmailCheckBox.click()
    }

    async enableDisableUndeliveredAndLostOrdersSlackNotification(){
        await this.UndeliveredAndLostOrdersSlackCheckBox.click()
    }
    
}

export {expect} from '@playwright/test'