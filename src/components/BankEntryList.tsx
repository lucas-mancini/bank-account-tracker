import React, { useState } from 'react'
import { Intent, Alert, Divider } from '@blueprintjs/core'
import BankEntryItem, { BankEntry } from './BankEntryItem'
import INITIAL_DATA from '../initialData'
import AddBankEntryItem from './AddBankEntryItem'
import './BankEntryList.scss'

const BankEntryList: React.FC = () => {
  const [entryItems, setEntryItems] = useState<BankEntry[]>(INITIAL_DATA)
  const [entryIdToRemove, setEntryIdToRemove] = useState('')

  const handleRemoveEntry = (id: string) => {
    setEntryItems(entryItems.filter(entry => entry.id !== id))
    setEntryIdToRemove('')
  }

  return (
    <React.Fragment>
      <section className="BankEntryList">
        {entryItems.map(item => (
          <BankEntryItem
            key={item.id}
            bankEntry={item}
            onRemove={id => setEntryIdToRemove(id)}
          />
        ))}
        <Alert
          canEscapeKeyCancel={true}
          canOutsideClickCancel={true}
          cancelButtonText="Cancel"
          confirmButtonText="Remove"
          icon="trash"
          intent={Intent.DANGER}
          isOpen={entryIdToRemove.length !== 0}
          onCancel={() => setEntryIdToRemove('')}
          onConfirm={() => handleRemoveEntry(entryIdToRemove)}
        >
          <p>Are you sure you want to remove this entry?</p>
        </Alert>
      </section>
      <Divider />
      <section className="BankEntryList-new-item">
        <AddBankEntryItem />
      </section>
    </React.Fragment>
  )
}

export default BankEntryList
