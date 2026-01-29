import { expect, test } from '../../fixtures/fixtures'
import { PageHeader } from '../dashboards/PageHeader'

test.describe("Dashboard Header Test", () => {


    const user__profile = {
        "baseURL": process.env.BASE_URL,
        "validQAUserEmail": process.env.QA__USER__USERNAME,
        "validQAUserPassword": process.env.QA__USER__PASSWORD
    }
    test.beforeEach("login", async ({ LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
        await LoginPageObject.doUserLogin(
            user__profile.validQAUserEmail!,
            user__profile.validQAUserPassword!
        )
    })
    test("TT - timezone", async ({ page, PageHeader }) => {
        const time__zones: string[]= [
            'America – Pacific', 
            'America – Eastern', 
            'America – Central', 
            'America – Mountain']
        for (const single__time__zone of time__zones){
            await PageHeader.clickOnTimeZoneMenu()
            await PageHeader.changeTimeZoneOnPageHeader(single__time__zone)
            await expect(page.getByRole('combobox', { name: single__time__zone})).toBeVisible()
        }
    })
})