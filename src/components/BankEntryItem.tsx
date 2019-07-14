import React from 'react'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import AccountBalanceItem, { AccountBalance } from './AccountBalanceItem'
import { getBankAccountFromId, formatDate } from '../util/helpers'
import './BankEntryItem.scss'

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

export interface BankEntry {
  id: string
  date: Date
  balances: AccountBalance[]
}

interface BankEntryItemProps {
  bankEntry: BankEntry
  onRemove: (id: string) => void
}

const BankEntryItem: React.FC<BankEntryItemProps> = ({
  bankEntry,
  onRemove
}) => {
  const formattedDate = formatDate(bankEntry.date)

  const totalAmount = bankEntry.balances.reduce((total, balance) => {
    const bankAccount = getBankAccountFromId(balance.bankAccountId)
    if (!bankAccount) return total

    return total + balance.amount * bankAccount.exchangeRateToUSD
  }, 0)

  return (
    <Card
      interactive={false}
      elevation={Elevation.THREE}
      className="BankEntryItem"
    >
      <div className="BankEntryItem-header">
        <Icon
          className="BankEntryItem-date-icon"
          icon={IconNames.CALENDAR}
          iconSize={16}
        />
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
        <span className="BankEntryItem-total-amount">
          {amountFormatter.format(totalAmount)}
        </span>
      </div>
    </Card>
  )
}

export default BankEntryItem
