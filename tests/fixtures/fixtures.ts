import { test as basetest } from '@playwright/test'
import { LoginPageObject } from '../pages/Auth/loginPage'
import { ForgotPasswordPage } from '../pages/Auth/forgotPasswordPage'
import { PageHeader} from '../pages/dashboards/PageHeader'
import { SettingPage } from '../pages/dashboards/SettingsPage'
import { ShipmentDeliveryStatsPage } from '../pages/dashboards/ShipmentDeliveryStatsPage'
import { SideBar } from '../pages/dashboards/SideBar'

type ELAppFixtures = {
    LoginPageObject: LoginPageObject
    ForgotPasswordPage: ForgotPasswordPage
    PageHeader: PageHeader
    SettingPage: SettingPage
    ShipmentDeliveryStatsPage: ShipmentDeliveryStatsPage
    SideBar: SideBar
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
    },

    SettingPage: async ({page}, use)=>{
        await use(new SettingPage(page))
    },
    
    ShipmentDeliveryStatsPage: async ({page}, use)=>{
        await use(new ShipmentDeliveryStatsPage(page))
    },

    SideBar: async ({page}, use)=>{
        await use(new SideBar(page))
    }
})

export { expect } from '@playwright/test'
