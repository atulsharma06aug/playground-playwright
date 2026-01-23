import {test} from '@playwright/test'

test("env test", async ({page})=>{
    console.log(process.env.BASE_URL)
    await page.goto(process.env.BASE_URL!, {
        waitUntil:'networkidle'
    })
})