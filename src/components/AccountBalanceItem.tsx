import React from 'react'
import FlagIcon from './FlagIcon'
import BankAccounts from '../config/BankAccounts'
import './AccountBalanceItem.scss'

export interface AccountBalance {
  bankAccountId: string
  amount: number
}

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

function getBankAccountFromId(id: string) {
  return BankAccounts.find(account => account.id === id)
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
      <span className="AccountBalanceItem-bank">{bankAccount.bankName}</span>
      <span className="AccountBalanceItem-currency">
        {bankAccount.currency}
      </span>
      <span className="AccountBalanceItem-amount">
        {amountFormatter.format(balance.amount)}
      </span>
    </li>
  )
}

export default AccountBalanceItem
