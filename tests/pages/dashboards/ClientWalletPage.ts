import {Page, Locator} from '@playwright/test'

export class ClientWalletPage{
    private readonly WalletPageLink: Locator
    private readonly WalletBalanceLabel: Locator
    private readonly AddFundsButton: Locator
    private readonly BankNameLabel: Locator
    private readonly BankAcocuntNumberLabel: Locator
    private readonly BankAccountLabelRouting: Locator
    private readonly FilterLabelButton: Locator
    private readonly AmountInputBoxAlertDialog: Locator
    private readonly ContinuePaymentButtonAlertDialog: Locator
    private readonly CancelPaymentButtonAlertDialog: Locator
    public readonly ErrorMessageLabel: Locator

    constructor(public readonly page: Page){
        this.WalletPageLink =this.page.getByRole('link', {name: 'Wallet'})
        this.WalletBalanceLabel = this.page.locator('div:has(span:has-text("Available balance")) span:nth-of-type(2)')
        this.AddFundsButton = this.page.getByRole('button', {name: 'Add funds'})
        this.BankAccountLabelRouting = this.page.locator('div:has(span:has-text("Bank")) span:nth-of-type(2)')
        this.BankAcocuntNumberLabel = this.page.locator('div:has(span:has-text("Account")) span:nth-of-type(2)')
        this.BankNameLabel = this.page.locator('div:has(span:has-text("Routing")) span:nth-of-type(2)')
        this.FilterLabelButton = this.page.getByRole('button', {name: /^\d{4}-\d{2}-\d{2}\s*-\s*\d{4}-\d{2}-\d{2}$/})
        this.AmountInputBoxAlertDialog = this.page.locator('input[aria-label="Amount in dollars"]')
        this.ContinuePaymentButtonAlertDialog = this.page.getByRole('button', {name: 'Continue to payment'})
        this.CancelPaymentButtonAlertDialog = this.page.getByRole('button', {name: 'Cancel'})
        this.ErrorMessageLabel = this.page.getByText("No Stripe customer associated with this account. Please contact support.")
    }

    async gotoWalletPageLink(){
        await this.WalletPageLink.click()
    }
    async clickOnAddFundsButtion(){
        await this.AddFundsButton.click()
    }

    async enterAmountInWalletInputBox(amount: string){
        await this.AmountInputBoxAlertDialog.fill(amount)
    }
    async clickOnContinuePaymentButton(){
        await this.ContinuePaymentButtonAlertDialog.click()
    }


}

export { expect} from '@playwright/test'