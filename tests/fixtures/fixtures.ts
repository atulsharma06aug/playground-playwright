import { test as basetest, expect } from '@playwright/test'
import { LoginPageObject } from '../pages/Auth/loginPage'
import { ForgotPasswordPage } from '../pages/Auth/forgotPasswordPage'


type ELAppFixtures = {
    LoginPageObject: LoginPageObject
    ForgotPasswordPage: ForgotPasswordPage

}

export const test = basetest.extend<ELAppFixtures>({
    
    LoginPageObject: async ({ page }, use) => {
        const loginApp = new LoginPageObject(page)
        await use(loginApp)
    },

    ForgotPasswordPage: async ({page}, use)=>{
        const forgotPasswordApp = new ForgotPasswordPage(page)
        await use(forgotPasswordApp)
    }
})


export { expect } from '@playwright/test'
