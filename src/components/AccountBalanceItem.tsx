import React from 'react'
import FlagIcon from './FlagIcon'
import BankAccounts from '../config/BankAccounts'
import './AccountBalanceItem.scss'

function getBankAccountFromId(id: string) {
  return BankAccounts.find(account => account.id === id)
}

export interface AccountBalance {
  bankAccountId: string
  amount: number
}

const AccountBalanceItem: React.FC<{ balance: AccountBalance }> = ({
  balance
}) => {
  const bankAccount = getBankAccountFromId(balance.bankAccountId)
  if (!bankAccount) {
    return null
  }

  return (
    <li className="AccountBalanceItem">
      <FlagIcon
        className="AccountBalanceItem-flag"
        code={bankAccount.country}
      />
      <span>{bankAccount.bankName}</span>
      <span>{bankAccount.currency}</span>
      <span>${balance.amount}</span>
    </li>
  )
}

export default AccountBalanceItem
