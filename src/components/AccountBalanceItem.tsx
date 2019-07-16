import React from 'react'
import { connect } from 'react-redux'
import FlagIcon from './FlagIcon'
import { getBankAccountFromId } from '../util/helpers'
import { AccountBalance, BankAccount } from '../types'
import { AppState } from '../reducers/reducers'
import './AccountBalanceItem.scss'

interface AccountBalanceItemProps {
  balance: AccountBalance
  amountFormatter: Intl.NumberFormat
  bankAccounts: BankAccount[]
}

const AccountBalanceItem: React.FC<AccountBalanceItemProps> = ({
  balance,
  amountFormatter,
  bankAccounts
}) => {
  const bankAccount = getBankAccountFromId(bankAccounts, balance.bankAccountId)
  if (!bankAccount) {
    return null
  }

  return (
    <li className="AccountBalanceItem">
      <FlagIcon className="AccountBalanceItem-flag" code={bankAccount.country} />
      <span className="AccountBalanceItem-bank">{bankAccount.bankName}</span>
      <span className="AccountBalanceItem-currency">{bankAccount.currency}</span>
      <span className="AccountBalanceItem-amount">{amountFormatter.format(balance.amount)}</span>
    </li>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    bankAccounts: state.data.bankAccounts
  }
}

export default connect(mapStateToProps)(AccountBalanceItem)
