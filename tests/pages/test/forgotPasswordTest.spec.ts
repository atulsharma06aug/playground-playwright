import { expect, test } from '../../fixtures/fixtures'

const $userProfile = {
    "validAdminUserEmail": process.env.ADMIN__USER__USERNAME,
    "validTestUserEamil": process.env.TEST__USER__USERNAME,
    "invalidEmailIDFormat": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID__FORMAT,
    "invalidEmailID": process.env.INCORRECT__USER__USERNAME__WITH__INCORRECT__EMAIL__ID,
    "validQAUserEmail": process.env.QA__USER__USERNAME,
}

test.describe("@forgotPassword", {
    annotation: {
        type: "forgot Password ",
        description: "this is test case"
    }
},
    () => {

        test.beforeEach("open forgot password url", async ({ page, ForgotPasswordPage, LoginPageObject }) => {
            await ForgotPasswordPage.gotoForgotUserPage()
        })


        test("TC_FP_01 Open Forgot Password Page", { tag: '@forgotPassword' },
            async ({ page, ForgotPasswordPage }) => {
                console.log("going to forgot password page")
                //await ForgotPasswordPage.gotoForgotUserPage()
            }
        )

        test("TC_FP_001 @forgotPassword",
            async ({ page, LoginPageObject, ForgotPasswordPage }) => {
                console.log("inside")
                await LoginPageObject.openLoginPage()
            })

        test("Validation Test for Email", async ({ page, ForgotPasswordPage }) => {
            // await ForgotPasswordPage.gotoForgotUserPage()
            await ForgotPasswordPage.clickSendResetLinkButton()
            await expect(page.getByText("Please enter your email address.")).toBeVisible()
        })

        test("TC-02, Forgot password", { tag: '@forgotPassword' }, async ({ page, ForgotPasswordPage }) => {
            console.log("test page")
            await ForgotPasswordPage.gotoForgotUserPage()
            if ($userProfile.invalidEmailIDFormat) {
                await ForgotPasswordPage.enterValidUserEmailID($userProfile.invalidEmailIDFormat!)
            } else {
                throw new Error("Provided Email ID is not injected using ENV file.")
            }
            await ForgotPasswordPage.clickSendResetLinkButton()
        })

    }) // end of test group 
