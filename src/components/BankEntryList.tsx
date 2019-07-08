import React, { useState } from 'react'
import BankEntryItem, { BankEntry } from './BankEntryItem'
import './BankEntryList.scss'

const INITIAL_ENTRIES = [
  {
    id: '1df6edf5-0fd2-4c5f-8208-5b84fc5a9f00',
    date: new Date('June 30, 2017'),
    balances: [
      { bankAccountId: 'Galicia', amount: 34817.8 },
      { bankAccountId: 'DB', amount: 642.88 },
      { bankAccountId: 'CommBank', amount: 28023.47 },
      { bankAccountId: 'Citi', amount: 2696.01 }
    ]
  },
  {
    id: '6abb27f3-2bd7-47b7-a910-beda0ac33c79',
    date: new Date('July 31, 2017'),
    balances: [
      { bankAccountId: 'Galicia', amount: 25662.51 },
      { bankAccountId: 'DB', amount: 432.75 },
      { bankAccountId: 'CommBank', amount: 26806.55 },
      { bankAccountId: 'Citi', amount: 1725.3 }
    ]
  },
  {
    id: '6bacd9a2-6988-439a-be2a-ee6542100043',
    date: new Date('August 31, 2017'),
    balances: [
      { bankAccountId: 'Galicia', amount: 20183.94 },
      { bankAccountId: 'DB', amount: 590.72 },
      { bankAccountId: 'CommBank', amount: 26792 },
      { bankAccountId: 'Citi', amount: 1000.23 },
      { bankAccountId: 'PayPal', amount: 5372.15 }
    ]
  },
  {
    id: '2ec8052b-1f4a-4ec8-bb33-b52e1eb90eb6',
    date: new Date('September 30, 2017'),
    balances: [
      { bankAccountId: 'Galicia', amount: 26717.84 },
      { bankAccountId: 'DB', amount: 994.7 },
      { bankAccountId: 'CommBank', amount: 26146.74 },
      { bankAccountId: 'Citi', amount: 2014.66 },
      { bankAccountId: 'PayPal', amount: 9183.1 }
    ]
  },
  {
    id: '96b1c77d-af94-45e6-9218-746eb2903ea4',
    date: new Date('October 31, 2017'),
    balances: [
      { bankAccountId: 'Galicia', amount: 17875.25 },
      { bankAccountId: 'DB', amount: 1302.74 },
      { bankAccountId: 'CommBank', amount: 26134.35 },
      { bankAccountId: 'Citi', amount: 2990.5 },
      { bankAccountId: 'PayPal', amount: 12142.26 }
    ]
  }
]

const BankEntryList: React.FC = () => {
  const [entryItems] = useState<BankEntry[]>(INITIAL_ENTRIES)

  return (
    <section className="BankEntryList">
      {entryItems.map(item => (
        <BankEntryItem key={item.id} bankEntry={item} />
      ))}
    </section>
  )
}

export default BankEntryList
