import { Page, Locator } from '@playwright/test'

export class SideBar {

    public readonly linkDeliveryStatsPage: Locator
    public readonly linkShipmentsPage: Locator
    public readonly linkInvoicesPage: Locator
    public readonly linkReportPage: Locator
    public readonly linkTransactionpage: Locator
    public readonly linkNotificationPage: Locator
    public readonly linkSettingPage: Locator
    public readonly linkWalletPage: Locator
    public readonly linkForgeLinkPage: Locator

    constructor(public readonly page: Page) {
        // a[href="/metric"]
        this.linkDeliveryStatsPage = this.page.getByRole('link', {name: 'Delivery Stats'})
        this.linkShipmentsPage = this.page.getByRole('link', {name: 'Shipments'})
        this.linkReportPage = this.page.getByRole('link', {name: 'Reports'})
        this.linkInvoicesPage = this.page.getByRole('link', {name: 'Invoices'})
        this.linkNotificationPage = this.page.getByRole('link', {name: 'Notifications'})
        this.linkTransactionpage = this.page.getByRole('link', {name: 'Transactions'})
        this.linkSettingPage = this.page.getByRole('link', {name: 'Settings'})
        this.linkWalletPage = this.page.getByRole('link', {name: 'Wallet'})
        this.linkForgeLinkPage = this.page.getByRole('link', {name: 'Forge'})
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

    async clickOnWalletPage(){
        await this.linkWalletPage.click()
    }

    async clickOnForgeLinkPage(){
        await this.linkForgeLinkPage.click()
    }

}

export { expect } from '@playwright/test'