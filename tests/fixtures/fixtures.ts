import { test as basetest } from '@playwright/test'
import { LoginPageObject } from '../pages/Auth/loginPage'
import { ForgotPasswordPage } from '../pages/Auth/forgotPasswordPage'
import { PageHeader} from '../pages/dashboards/PageHeader'


type ELAppFixtures = {
    LoginPageObject: LoginPageObject
    ForgotPasswordPage: ForgotPasswordPage
    PageHeader: PageHeader
}

export const test = basetest.extend<ELAppFixtures>({
    
    LoginPageObject: async ({ page }, use) => {
        await use(new LoginPageObject(page))
    },

    ForgotPasswordPage: async ({page}, use)=>{
        await use(new ForgotPasswordPage(page))
    },

    PageHeader: async ({page}, use)=>{
        await use(new PageHeader(page))
    }

})

export { expect } from '@playwright/test'
