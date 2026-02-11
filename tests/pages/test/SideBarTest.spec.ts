import { test, expect } from '../../fixtures/fixtures'
import { LoginPageObject } from '../Auth/loginPage'

test.describe("Sidebar Link test", () => {
    const user__profile = {
        "baseURL": process.env.BASE_URL as string,
        "validQAUserEmail": process.env.QA__USER__USERNAME as string,
        "validQAUserPassword": process.env.QA__USER__PASSWORD as string
    }

    test.beforeEach('perform login', async ({ page, LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
        await LoginPageObject.doUserLogin(
            user__profile.validQAUserEmail,
            user__profile.validQAUserPassword
        )
        console.log("user logged in successfully")
        await page.waitForURL(url => !url.pathname.includes('/login'));
        await expect(page).toHaveURL(user__profile.baseURL + "/metric")
    })

    test("TC-01, Sidebar Links Test", async ({page, SideBar})=>{
        await SideBar.clickOnDeliveryStatePageLink()
        await expect(page.locator('a[href="/metric"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + '/metric')
        await SideBar.clickOnShipmentPageLink()
        await expect(page.locator('a[href="/shipment"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL+ "/shipment")
        await SideBar.clickOnInvoicePageLink()
        await expect(page.locator('a[href="/invoice"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/invoice")
        await SideBar.clickOnReportPage()
        await expect(page.locator('a[href="/report"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/report")
        await SideBar.clickOnTrasactionPage()
        await expect(page.locator('a[href="/transaction"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/transaction")
        await SideBar.clickOnNotificationPage()
        await expect(page.locator('a[href="/notification"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/notification")
        await SideBar.clickOnSettingPage()
        await expect(page.locator('a[href="/settings"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/settings")
        await SideBar.clickOnWalletPage()
        await expect(page.locator('a[href="/wallet"]').getByRole('button')).toHaveClass(/Mui-selected/)
        await expect(page).toHaveURL(process.env.BASE_URL + "/wallet")
    })

})