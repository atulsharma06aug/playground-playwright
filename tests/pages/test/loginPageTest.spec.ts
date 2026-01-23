import {test} from '@playwright/test'

test("env test", async ({page})=>{
    console.log(process.env.BASE_URL)
})