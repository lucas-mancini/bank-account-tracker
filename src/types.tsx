export interface BankAccount {
  id: string
  bankName: string
  country: string
  currency: string
  exchangeRateToUSD: number
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
export type DataStateType = BankEntry[]
export type AppStateType = { entryIdToRemove: string }
