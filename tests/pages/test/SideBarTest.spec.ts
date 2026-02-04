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

    test("TC-01, Delivery Stats link should open Delivery Stats page", async ({page, SideBar})=>{
        //await expect(page.linkDeliveryStatsPage).toBeVisible()
        await SideBar.clickOnDeliveryStatePageLink()
        await expect(page).toHaveURL(process.env.BASE_URL + '/metric')
        await SideBar.clickOnShipmentPageLink()
    })

})