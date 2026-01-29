import { test } from '../../fixtures/fixtures'

test.describe("Setting Testing", () => {
    const user__profile = {
        "baseURL": process.env.BASE_URL as string,
        "validQAUserEmail": process.env.QA__USER__USERNAME as string,
        "validQAUserPassword": process.env.QA__USER__PASSWORD as string
    }

    test.beforeEach("login", async ({ page, LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
        await LoginPageObject.doUserLogin(
            user__profile.validQAUserEmail,
            user__profile.validQAUserPassword
        )
    })

    test("Setting Toggle On", async ({SettingPage, ShipmentDeliveryStatsPage }) => {
        await ShipmentDeliveryStatsPage.openSettingPageLink()
        await SettingPage.enableDisableUndeliveredAndLostOrdersEmailNotification()
        await SettingPage.page.pause()
        await SettingPage.enableDisableUndeliveredAndLostOrdersSlackNotification()
        await SettingPage.page.pause()
    })
})


