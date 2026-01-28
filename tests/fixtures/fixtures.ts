import { test as basetest, expect } from '@playwright/test'
import { LoginPageObject } from '../pages/Auth/loginPage'
import { ForgotPasswordPage } from '../pages/Auth/forgotPasswordPage'

type ELAppFixtures = {
    LoginPageObject: LoginPageObject
    ForgotPasswordPage: ForgotPasswordPage
}

export const test = basetest.extend<ELAppFixtures>({
    
    LoginPageObject: async ({ page }, use) => {
        await use(new LoginPageObject(page))
    },

    ForgotPasswordPage: async ({page}, use)=>{
        await use(new ForgotPasswordPage(page))
    }
})

export { expect } from '@playwright/test'
