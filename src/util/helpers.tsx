import BankAccounts from '../config/BankAccounts'

export function getBankAccountFromId(id: string) {
  return BankAccounts.find(account => account.id === id)
}
