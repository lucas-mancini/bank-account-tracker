import React from 'react'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import AccountBalanceItem, { AccountBalance } from './AccountBalanceItem'
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

const BankEntryItem: React.FC<{ bankEntry: BankEntry }> = ({ bankEntry }) => {
  const formattedDate = bankEntry.date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

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
        <span className="BankEntryItem-total-label"> Total (in USD)</span>
        <span className="BankEntryItem-total-amount">
          {amountFormatter.format(110456.72)}
        </span>
      </div>
    </Card>
  )
}

export default BankEntryItem
