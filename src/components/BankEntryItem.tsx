import React from 'react'
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
    <div className="BankEntryItem">
      <div className="BankEntryItem-date">{formattedDate}</div>
      <ul className="BankEntryItem-balances">
        {bankEntry.balances.map(balance => (
          <li
            key={balance.bankAccountId}
          >{`${balance.bankAccountId} - ${balance.amount}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default BankEntryItem
