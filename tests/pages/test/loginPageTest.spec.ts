import { test, expect } from '../../fixtures/fixtures'

// user info

test.describe("Login Page Test", () => {

    const user__profile = {
        "baseURL": process.env.BASE_URL,
        "validAdminUserEmail": process.env.ADMIN__USER__USERNAME as string,
        "validAdminUserPassword": process.env.ADMIN__USER__PASSWORD as string,
        "validTestUserEamil": process.env.TEST__USER__USERNAME as string,
        "invalidEmailIDFormat": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID__FORMAT as string,
        "invalidEmailID": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID as string,
        "validQAUserEmail": process.env.QA__USER__USERNAME as string,
        "validQAUserPassword": process.env.QA__USER__PASSWORD as string
    }

    test.beforeEach("Open Login Page", async ({LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
    })

    test("TC-01, Success Login @login",
        async ({ page, LoginPageObject }) => {
            if (user__profile.validQAUserEmail && user__profile.validQAUserPassword) {
                await LoginPageObject.doUserLogin(
                    user__profile.validQAUserEmail,
                    user__profile.validQAUserPassword
                )
                await expect(page).toHaveURL(user__profile.baseURL + "/metric")
            } else {
                throw new Error("User Login details is not provided in ENV file")
            }
        })
    
    test("TC-02 Incorrect Email Verification @login", 
        async ({page, LoginPageObject})=>{
        await LoginPageObject.enterEmailID(user__profile.invalidEmailIDFormat)
        await LoginPageObject.pressSignIntoDashboardButton()
        await expect(
            page.getByText("Please enter a valid email address.")
        ).toBeVisible()
    })

    test.afterEach("Clearing All", async ({page, context})=>{
        await context.clearCookies();
    })
})
