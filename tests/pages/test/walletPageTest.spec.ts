import { randomInt } from 'crypto'
import { test, expect } from '../../fixtures/fixtures'

test.describe("Wallet Page Test", () => {

    const user__profile = {
        "baseURL": process.env.BASE_URL as string,
        "validQAUserEmail": process.env.TEST__USER__USERNAME as string,
        "validQAUserPassword": process.env.TEST__USER__PASSWORD as string
    }

    test.beforeEach("login", async ({ page, LoginPageObject }) => {
        await LoginPageObject.openLoginPage()
        await LoginPageObject.doUserLogin(
            user__profile.validQAUserEmail,
            user__profile.validQAUserPassword
        )
    })

    test("open Wallet page", async ({ page, request, ClientWalletPage }) => {
        await ClientWalletPage.gotoWalletPageLink()
        await ClientWalletPage.clickOnAddFundsButtion()
        const random__amount = randomInt(2, 13)
        await ClientWalletPage.enterAmountInWalletInputBox(String(random__amount))
        const [popup] = await Promise.all([
            page.waitForEvent('popup'),
            ClientWalletPage.clickOnContinuePaymentButton()
        ]);
        const stripe__url = popup.url();
        const session__id = stripe__url.split('#')[0].split('/').pop()
        const call__back__url = 'https://dev-tracking.efficientlogistics.co/wallet?status=success&session_id='+session__id+'&amount='+random__amount+'00'
        console.log("Stripe URL: "+ stripe__url)
        console.log("Session ID:- "+session__id)
        console.log("Callback URL:- "+ call__back__url)
        //hold browser .....
        page.pause()
        const res = await request.get(
            call__back__url
        );
        expect(res.ok()).toBeTruthy();
    })
})