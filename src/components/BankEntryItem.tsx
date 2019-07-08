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
  console.log(bankEntry)

  return <div className="BankEntryItem">A bank entry item</div>
}

export default BankEntryItem
