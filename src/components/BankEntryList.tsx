import React, { useState } from 'react'
import BankEntryItem, { BankEntry } from './BankEntryItem'
import INITIAL_DATA from '../initialData'
import './BankEntryList.scss'

const BankEntryList: React.FC = () => {
  const [entryItems, setEntryItems] = useState<BankEntry[]>(INITIAL_DATA)

  return (
    <section className="BankEntryList">
      {entryItems.map(item => (
        <BankEntryItem
          key={item.id}
          bankEntry={item}
          onRemove={id =>
            setEntryItems(entryItems.filter(entry => entry.id !== id))
          }
        />
      ))}
    </section>
  )
}

export default BankEntryList
