import {Locator, Page, test, expect} from '@playwright/test'

export class LoginPageObject{
    private readonly userNameInputBox: Locator
    private readonly userPasswordInputBox: Locator
    private readonly userLoginButton: Locator
    private readonly forgotPasswordLink: Locator
    private readonly appLogo: Locator

    constructor(public readonly page: Page){
        this.userLoginButton = this.page.getByRole('button', {name: 'Sign In to Dashboard'})
        this.userNameInputBox = this.page.locator('input[type="email"]')
        this.userPasswordInputBox = this.page.locator('input[type="password"]')
        this.forgotPasswordLink = this.page.getByRole('link', {name: 'Forgot Password?'})
        this.appLogo = this.page.getByAltText('logo')
    }

    async openLoginPage(){
        if(process.env.BASE_URL){
            await this.page.goto(process.env.BASE_URL, {
                waitUntil:'networkidle'
            })
        } else {
            throw new Error("Unbale to load Login page URL from ENV file...")
        }
    }

    async enterEmailID(userEmailID: string){
        await this.userNameInputBox.fill(userEmailID)
    }

    async enterUserPassword(userPassword: string){
        await this.userPasswordInputBox.fill(userPassword)
    }

    async pressSignIntoDashboardButton(){
        await this.userLoginButton.click()
    }

    async clickOnForgotPasswordLink(){
        await this.forgotPasswordLink.click()
    }

    async doUserLogin(username: string, userpassword: string){
        await this.userNameInputBox.fill(username)
        await this.userPasswordInputBox.fill(userpassword)
        await this.userLoginButton.click()
    }

}