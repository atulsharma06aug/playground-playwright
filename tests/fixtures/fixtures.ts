import {test as basetest, expect} from '@playwright/test'
import {LoginPageObject} from '../pages/Auth/loginPage'


type ELAppFixtures = {
    LoginPageObject: LoginPageObject
}

export const test  = basetest.extend<ELAppFixtures>({
    LoginPageObject: async({page}, use)=>{
        const loginApp = new LoginPageObject(page)
        await use(loginApp)
    }
})


export {expect} from '@playwright/test'
