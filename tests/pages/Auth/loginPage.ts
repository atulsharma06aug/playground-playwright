import {Locator, Page, test, expect} from '@playwright/test'

export class LoginPageObject{
    private readonly page: Page
    private readonly userNameInputBox: Locator
    private readonly userPasswordInputBox: Locator
    private readonly userLoginButton: Locator
    private readonly forgotPasswordLink: Locator

    constructor(page: Page){
        this.page = page
        this.userLoginButton = this.page.getByRole('button', {name: 'Sign In to Dashboard'})
        this.userNameInputBox = this.page.locator('input[type="email"]')
        this.userPasswordInputBox = this.page.locator('input[type="password"]')
        this.forgotPasswordLink  = this.page.getByText('Forgot Password?')
    }

    async openLoginPage(){
        await this.page.goto(process.env.BASE_URL!, {
            waitUntil:'networkidle'
        })
        console.log(process.env.BASE_URL)
    }

    async enterInvalidLoginDetails(user: any)  {
        console.log("userOject"+ user)
        await this.userNameInputBox.fill(user.username)
        await this.userPasswordInputBox.fill(user.userpassword)
        await this.userLoginButton.click()
        await expect(this.page.getByText("Please enter a valid email address.")).toBeVisible();
    }

    async isForgotPasswordVisible(){
        await this.forgotPasswordLink.isVisible()
        await expect(this.page.getByText("Forgot Password?")).toBeVisible()
    }

}