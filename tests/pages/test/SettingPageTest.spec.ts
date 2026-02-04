import { expect, test } from '../../fixtures/fixtures'

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

    test("Setting Toggle On", async ({page, SettingPage, ShipmentDeliveryStatsPage }) => {
        const UndeliveredandLostorders = "Undelivered and Lost orders"
        const UndeliveredandLostorders2 = "Undelivered and Lost orders2"
        const InvoiceGenerated = "invoice 2"
        await ShipmentDeliveryStatsPage.openSettingPageLink()
        if(await SettingPage.isChecboxIsChecked(UndeliveredandLostorders, 'Email')){
            await SettingPage.getToggleONOFF(UndeliveredandLostorders, 'Email')
            await expect(SettingPage.expectResult(UndeliveredandLostorders, 'Email')).not.toBeChecked()
        } else {
            await SettingPage.getToggleONOFF(UndeliveredandLostorders, 'Email')
            await expect(SettingPage.expectResult(UndeliveredandLostorders, 'Email')).toBeChecked()
        }
        await SettingPage.getToggleONOFF(UndeliveredandLostorders, 'Email')
        // await expect(SettingPage.expectResult(UndeliveredandLostorders, 'Email')).not.toBeChecked()

        await SettingPage.getToggleONOFF(UndeliveredandLostorders2, 'Email')
        // await expect(SettingPage.expectResult(UndeliveredandLostorders2, 'Email')).not.toBeChecked()
        await SettingPage.getToggleONOFF(UndeliveredandLostorders2, 'Slack')
        // await expect(SettingPage.expectResult(UndeliveredandLostorders2,'Slack')).not.toBeChecked()

        await SettingPage.getToggleONOFF(InvoiceGenerated, 'Email')
        // await expect(SettingPage.expectResult(InvoiceGenerated, 'Email')).not.toBeChecked()
        await SettingPage.getToggleONOFF(InvoiceGenerated, 'Slack')
        // await expect(SettingPage.expectResult(InvoiceGenerated, 'Slack')).not.toBeChecked()
        // await page.pause()
        await SettingPage.clickSaveChangesButton()
        await expect(page.locator('.MuiAlert-root').first()).toContainText('Notification settings updated successfully!')
        
    })
})


