import { userInfo } from 'node:os'
import { test, expect } from '../../fixtures/fixtures'

// user info

test.describe("Login Page Test", () => {

    const user__profile = {
        "baseURL": process.env.BASE_URL,
        "validAdminUserEmail": process.env.ADMIN__USER__USERNAME,
        "validAdminUserPassword": process.env.ADMIN__USER__PASSWORD,
        "validTestUserEamil": process.env.TEST__USER__USERNAME,
        "invalidEmailIDFormat": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID__FORMAT,
        "invalidEmailID": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID,
        "validQAUserEmail": process.env.QA__USER__USERNAME,
        "validQAUserPassword": process.env.QA__USER__PASSWORD
    }

    test.beforeEach("Open Login Page", async ({LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
    })

    test("TC-01, Success Login @login",
        async ({ page, LoginPageObject }) => {
            if (user__profile.validQAUserEmail && user__profile.validQAUserPassword) {
                await LoginPageObject.doUserLogin(
                    user__profile.validQAUserEmail!,
                    user__profile.validQAUserPassword!
                )
                await expect(page).toHaveURL(user__profile.baseURL + "/metric")
            } else {
                throw new Error("User Login details is not provided in ENV file")
            }
        })

    test.afterEach("Clearing All", async ({page, context})=>{
        await context.clearCookies();
    })
})
