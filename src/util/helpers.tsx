import BankAccounts from '../config/BankAccounts'

export function getBankAccountFromId(id: string) {
  return BankAccounts.find(account => account.id === id)
}

export function formatDate(date: Date) {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
