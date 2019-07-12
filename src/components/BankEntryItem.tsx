import React from 'react'
import { Card, Elevation, Icon } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import FlagIcon from './FlagIcon'
import './BankEntryItem.scss'

/* public interfaces */
export interface AccountBalance {
  bankAccountId: string
  amount: number
}

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
          <li key={balance.bankAccountId} className="BankEntryItem-balance">
            <FlagIcon className="BankEntryItem-flag" code="de" />
            <span>{`${balance.bankAccountId} - ${balance.amount}`}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default BankEntryItem
