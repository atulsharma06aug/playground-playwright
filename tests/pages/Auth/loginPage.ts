import {Locator, Page, test} from '@playwright/test'

export class LoginPageObject{
    readonly page: Page
    readonly userNameInputBox: Locator
    readonly userPasswordInputBox: Locator
    readonly userLoginButton: Locator

    constructor(page: Page){
        // Init all the loctors 
        this.page = page
        this.userLoginButton = this.page.locator('')
        this.userNameInputBox = this.page.locator('')
        this.userPasswordInputBox = this.page.locator('')
    }

    async openLoginPage(){
        await this.page.goto("https://dev-tracking.efficientlogistics.co/login")
        console.log(process.env.BASE_URL)
    }


}