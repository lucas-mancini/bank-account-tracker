import React from 'react'
import { connect } from 'react-redux'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import AccountBalanceItem from './AccountBalanceItem'
import { getBankAccountFromId, formatDate } from '../util/helpers'
import { BankEntry, BankAccount } from '../types'
import './BankEntryItem.scss'
import { AppState } from '../reducers/reducers'

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

interface BankEntryItemProps {
  bankEntry: BankEntry
  onRemove: (id: string) => void
  bankAccounts: BankAccount[]
  exchangeRates: { [s: string]: number }
}

const BankEntryItem: React.FC<BankEntryItemProps> = ({
  bankEntry,
  onRemove,
  bankAccounts,
  exchangeRates
}) => {
  const formattedDate = formatDate(bankEntry.date)

  const totalAmount = bankEntry.balances.reduce((total, balance) => {
    const bankAccount = getBankAccountFromId(bankAccounts, balance.bankAccountId)
    if (!bankAccount) return total

    return total + balance.amount * exchangeRates[bankAccount.currency]
  }, 0)

  return (
    <Card interactive={false} elevation={Elevation.THREE} className="BankEntryItem">
      <div className="BankEntryItem-header">
        <Icon className="BankEntryItem-date-icon" icon={IconNames.CALENDAR} iconSize={16} />
        <span className="BankEntryItem-date">{formattedDate}</span>
        <Icon
          className="BankEntryItem-trash"
          icon={IconNames.TRASH}
          iconSize={16}
          onClick={() => onRemove(bankEntry.id)}
        />
      </div>
      <ul className="BankEntryItem-balances">
        {bankEntry.balances.map(balance => (
          <AccountBalanceItem
            key={balance.bankAccountId}
            balance={balance}
            amountFormatter={amountFormatter}
          />
        ))}
      </ul>
      <div className="BankEntryItem-total">
        <span className="BankEntryItem-total-label">Total (in USD)</span>
        <span className="BankEntryItem-total-amount">{amountFormatter.format(totalAmount)}</span>
      </div>
    </Card>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    bankAccounts: state.data.bankAccounts,
    exchangeRates: state.data.exchangeRates
  }
}

export default connect(mapStateToProps)(BankEntryItem)
