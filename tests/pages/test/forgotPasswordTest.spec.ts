import { expect, test } from '../../fixtures/fixtures'


const $userProfile = {
    "username" : process.env.USER_EMAIL
}

test("TC_FP_01 Open Forgot Password Page", {tag: '@forgotPassword'}, 
    async ({page, ForgotPasswordPage} )=>{
        console.log("going to forgot password page")
        await ForgotPasswordPage.gotoForgotUserPage()
    }
)

test("TC_FP_001 @forgotPassword", { tag: '@forgotPassword'},
    async ({ page, LoginPageObject, ForgotPasswordPage }) => {
        console.log("inside")
        await LoginPageObject.openLoginPage()
        await LoginPageObject.isForgotPasswordVisible()
    })


test("TC-02, Forgot password", { tag: '@forgotPassword' }, async ({ page, ForgotPasswordPage }) => {
    console.log("test page")
    await ForgotPasswordPage.gotoForgotUserPage()
    await ForgotPasswordPage.enterValidUserEmailID($userProfile.username!)
    await ForgotPasswordPage.clickSendResetLinkButton()
})