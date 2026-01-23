import {Locator, Page, test, expect} from '@playwright/test'

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
        await this.page.goto(process.env.BASE_URL!)
        console.log(process.env.BASE_URL)
    }

    async enterInvalidLoginDetails(user: any)  {
        console.log("userOject"+ user)
        await this.page.locator('input[type="email"]').fill(user.username)
        await this.page.locator('input[type="password"]').fill(user.userpassword)
        await this.page.getByRole('button', {}).click()
        await expect(this.page.getByText("Please enter a valid email address.")).toBeVisible();
    }

}