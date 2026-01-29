import { Locator, Page } from '@playwright/test'

export class ShipmentDeliveryStatsPage {

    private readonly settingPageLink: Locator
    constructor(public readonly page: Page) {
        this.settingPageLink = this.page.getByRole('link', {name: 'Settings'})        
    }


    async openSettingPageLink()
    {
        await this.settingPageLink.click()
    }

}

export { expect } from '@playwright/test'