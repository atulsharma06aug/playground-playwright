import { test } from '../../fixtures/fixtures.ts'

test("TC-01, Login With Incorrect Details @loginPageTest", {
    annotation: {
        type: "Incorrect login Credentails",
        description:"Validates login error handling when incorrect credentials are provided"
    }
}, async ({ page, LoginPageObject }) => {
    console.log(process.env.BASE_URL!)
    await LoginPageObject.openLoginPage()
    await LoginPageObject.enterInvalidLoginDetails(
        {
            username: process.env.USER_EMAIL,
            userpassword: process.env.USER_PASSWORD
        }
    )
    await page.screenshot({path:'screenshoot.png'})
})