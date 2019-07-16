import { BankAccount } from '../types'

export function getBankAccountFromId(accounts: BankAccount[], id: string) {
  return accounts.find(account => account.id === id)
}

export function formatDate(date: Date) {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
