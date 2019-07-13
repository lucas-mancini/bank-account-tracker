import React from 'react'
import FlagIcon from './FlagIcon'
import BankAccounts from '../config/BankAccounts'
import './AccountBalanceItem.scss'

export interface AccountBalance {
  bankAccountId: string
  amount: number
}

function getBankAccountFromId(id: string) {
  return BankAccounts.find(account => account.id === id)
}

interface AccountBalanceItemProps {
  balance: AccountBalance
  amountFormatter: Intl.NumberFormat
}

const AccountBalanceItem: React.FC<AccountBalanceItemProps> = ({
  balance,
  amountFormatter
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
