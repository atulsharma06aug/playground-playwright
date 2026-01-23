import { expect, test } from '../../fixtures/fixtures'


test("TC_FP_001 @forgotPassword", {
    annotation:
    {
        type: "Verify Forgot Password link is visible on Login page",
        description: "Check that Forgot Password link is displayed and clickable on the Login page."
    }},
    async ({ page, LoginPageObject, ForgotPasswordPage }) => {
        console.log("inside")
        await LoginPageObject.openLoginPage()
        await LoginPageObject.isForgotPasswordVisible()
})


test("TC-02, Forgot password @forgotPassword", async ({ page, ForgotPasswordPage }) => {
    console.log("test page")
    await ForgotPasswordPage.gotoForgotUserPage()
    await ForgotPasswordPage.enterValidUserEmailID(process.env.USER_EMAIL!)
    await ForgotPasswordPage.clickSendResetLinkButton()
    await page.pause()
})