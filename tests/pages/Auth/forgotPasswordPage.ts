import {Locator, Page, test, expect} from '@playwright/test'

export class ForgotPasswordPage{
     readonly page: Page
     readonly userInputEmailID: Locator
     readonly forgotPasswordButton: Locator

    constructor(page:Page){
        this.page = page
        this.userInputEmailID = this.page.locator('input[type="email"]')
        this.forgotPasswordButton = this.page.getByRole("button", {name: 'Send Reset Link'})
    }

    async gotoForgotUserPage(){
        await this.page.goto(process.env.BASE_URL+""+process.env.FORGOT__USER__PASSWORD__URL,
            {
                waitUntil:'networkidle'
            }
        )
    }

    async enterValidUserEmailID(email: string){
        await this.userInputEmailID.fill(email)  
    }

    async enterInvalidUserEmailID(email: string){
        await this.userInputEmailID.fill(email)
    }

    async clickSendResetLinkButton(){
        await this.forgotPasswordButton.click()
    }


}