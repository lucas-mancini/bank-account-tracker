import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Intent, Alert, Divider } from '@blueprintjs/core'
import BankEntryItem from './BankEntryItem'
import AddBankEntryItem from './AddBankEntryItem'
import { AppState } from '../reducers/reducers'
import { BankEntry } from '../types'
import { BankEntryActionTypes, addEntry, removeEntry, setEntryIdToRemove } from '../actions/actions'
import './BankEntryList.scss'

interface BankEntryListProps {
  entryItems: BankEntry[]
  entryIdToRemove: string
  onAddEntry: (entry: BankEntry) => void
  onRemoveEntry: (id: string) => void
  setEntryIdToRemove: (id: string) => void
}

const BankEntryList: React.FC<BankEntryListProps> = ({
  entryItems,
  entryIdToRemove,
  onAddEntry,
  onRemoveEntry,
  setEntryIdToRemove
}) => (
  <React.Fragment>
    <section className="BankEntryList">
      {entryItems.map(item => (
        <BankEntryItem key={item.id} bankEntry={item} onRemove={id => setEntryIdToRemove(id)} />
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
        onConfirm={() => {
          onRemoveEntry(entryIdToRemove)
          setEntryIdToRemove('')
        }}
      >
        <p>Are you sure you want to remove this entry?</p>
      </Alert>
    </section>
    <Divider />
    <section className="BankEntryList-new-item">
      <AddBankEntryItem onAdd={onAddEntry} />
    </section>
  </React.Fragment>
)

const mapStateToProps = (state: AppState) => {
  return {
    entryItems: state.data,
    entryIdToRemove: state.app.entryIdToRemove
  }
}

const mapDispatchToProps = (dispatch: Dispatch<BankEntryActionTypes>) => {
  return {
    onAddEntry: (entry: BankEntry) => dispatch(addEntry(entry)),
    onRemoveEntry: (id: string) => dispatch(removeEntry(id)),
    setEntryIdToRemove: (id: string) => dispatch(setEntryIdToRemove(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BankEntryList)
