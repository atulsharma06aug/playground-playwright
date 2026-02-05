import { Page, Locator } from '@playwright/test'

export class SideBar {

    public readonly linkDeliveryStatsPage: Locator
    public readonly linkShipmentsPage: Locator
    public readonly linkInvoicesPage: Locator
    public readonly linkReportPage: Locator
    public readonly linkTransactionpage: Locator
    public readonly linkNotificationPage: Locator
    public readonly linkSettingPage: Locator

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

    deliveryStatsLocator(){
        return this.linkDeliveryStatsPage
    }

    async clickOnShipmentPageLink(){
        await this.linkShipmentsPage.click()
    }

    async clickOnInvoicePageLink(){
        await this.linkInvoicesPage.click()
    }

    async clickOnReportPage(){
        await this.linkReportPage.click()
    }

    async clickOnTrasactionPage(){
        await this.linkTransactionpage.click()
    }

    async clickOnNotificationPage(){
        await this.linkNotificationPage.click()
    }

    async clickOnSettingPage(){
        await this.linkSettingPage.click()
    }

}

export { expect } from '@playwright/test'