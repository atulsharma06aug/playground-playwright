import { expect, test } from '../../fixtures/fixtures'


test("TC_FP_001 @forgotPassword", { tag: '@forgotPassword'},
    async ({ page, LoginPageObject, ForgotPasswordPage }) => {
        console.log("inside")
        await LoginPageObject.openLoginPage()
        await LoginPageObject.isForgotPasswordVisible()
    })


test("TC-02, Forgot password", { tag: '@forgotPassword' }, async ({ page, ForgotPasswordPage }) => {
    console.log("test page")
    await ForgotPasswordPage.gotoForgotUserPage()
    await ForgotPasswordPage.enterValidUserEmailID(process.env.USER_EMAIL!)
    await ForgotPasswordPage.clickSendResetLinkButton()
})