import { Page, Locator } from '@playwright/test'

export class SideBar {

    private readonly linkDeliveryStatsPage: Locator
    private readonly linkShipmentsPage: Locator
    private readonly linkInvoicesPage: Locator
    private readonly linkReportPage: Locator
    private readonly linkTransactionpage: Locator
    private readonly linkNotificationPage: Locator
    private readonly linkSettingPage: Locator

    constructor(public readonly page: Page) {
        // a[href="/metric"]
        this.linkDeliveryStatsPage = this.page.getByRole('link', {name: 'Delivery Stats'})
        this.linkShipmentsPage = this.page.getByRole('link', {name: 'Shipments'})
        this.linkInvoicesPage = this.page.getByRole('link', {name: 'Invoices'})
        this.linkReportPage = this.page.getByRole('link', {name: 'Reports'})
        this.linkNotificationPage = this.page.getByRole('link', {name: 'Notifications'})
        this.linkTransactionpage = this.page.getByRole('link', {name: 'Transactions'})
        this.linkSettingPage = this.page.getByRole('link', {name: 'Settings'})
    }

    async clickOnDeliveryStatePageLink(){
        await this.linkDeliveryStatsPage.click()
    }

    async clickOnShipmentPageLink(){
        await this.linkShipmentsPage.click()
    }


}

export { expect } from '@playwright/test'