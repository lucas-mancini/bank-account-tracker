export interface BankAccount {
  id: string
  bankName: string
  country: string
  currency: string
}

export interface BankEntry {
  id: string
  date: Date
  balances: AccountBalance[]
}

export interface AccountBalance {
  bankAccountId: string
  amount: number
}

// reducer types
export type DataStateType = {
  bankEntries: BankEntry[]
  bankAccounts: BankAccount[]
  exchangeRates: { [s: string]: number }
}
export type AppStateType = { entryIdToRemove: string }
