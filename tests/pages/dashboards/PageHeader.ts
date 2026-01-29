import {Page, Locator} from '@playwright/test'
import { read } from 'node:fs'

export class PageHeader{
    private readonly searchTrackingIDInputBox: Locator
    private readonly timezoneDropdownMenu: Locator

    constructor(public readonly page: Page){
        this.searchTrackingIDInputBox = this.page.locator('input[placeholder="#Tracking Number"]')
        this.timezoneDropdownMenu = this.page.locator('[aria-labelledby="timezone-select-label timezone-select"]')
    }

    async searchByTrackingID(shipment__tracking__id: string){
        await this.searchTrackingIDInputBox.fill(shipment__tracking__id)
    }

    async clickOnTimeZoneMenu(){
        await this.timezoneDropdownMenu.click()
    }

    async changeTimeZoneOnPageHeader(selected__time__zone: string){
        await this.page.getByRole(
            'option', {
                name: selected__time__zone
        }
        ).click()
    // await this.page.pause()
    }
}