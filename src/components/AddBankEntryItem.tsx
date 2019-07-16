import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  Card,
  Elevation,
  Button,
  Intent,
  FormGroup,
  ControlGroup,
  HTMLSelect,
  NumericInput
} from '@blueprintjs/core'
import { DateInput, IDateFormatProps } from '@blueprintjs/datetime'
import uuidv4 from 'uuid/v4'
import { formatDate } from '../util/helpers'
import { BankEntry, BankAccount } from '../types'
import { AppState } from '../reducers/reducers'
import './AddBankEntryItem.scss'

const jsDateFormatter: IDateFormatProps = {
  formatDate: formatDate,
  parseDate: str => new Date(str),
  placeholder: 'MMM DD, YYYY'
}

interface AddBankEntryItemProps {
  onAdd: (entry: BankEntry) => void
  bankAccounts: BankAccount[]
}

const AddBankEntryItem: React.FC<AddBankEntryItemProps> = ({ onAdd, bankAccounts }) => {
  const DEFAULT_NEW_BALANCE = {
    bankAccountId: bankAccounts[0].id,
    amount: NumericInput.VALUE_EMPTY
  }

  const [selectedDate, setSelectedDate] = useState(new Date())
  const [balances, setBalances] = useState([DEFAULT_NEW_BALANCE])

  const handleBalanceBankAccountIdChanged = (index: number, bankAccountId: string) => {
    const updatedBalances = balances.map((balance, balanceIndex) => {
      return balanceIndex === index ? { ...balance, bankAccountId } : balance
    })
    setBalances(updatedBalances)
  }

  const handleBalanceAmountChanged = (index: number, amount: string) => {
    const updatedBalances = balances.map((balance, balanceIndex) => {
      return balanceIndex === index ? { ...balance, amount } : balance
    })
    setBalances(updatedBalances)
  }

  const handleAddNewBalance = () => {
    setBalances([...balances, DEFAULT_NEW_BALANCE])
  }

  const handleAddEntry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const entryId = uuidv4()
    const entryDate = selectedDate
    const entryBalances = balances
      .filter(balance => !Number.isNaN(Number.parseFloat(balance.amount)))
      .map(balance => ({
        bankAccountId: balance.bankAccountId,
        amount: Number.parseFloat(balance.amount)
      }))
      .filter(balance => balance.amount !== 0)

    onAdd({ id: entryId, date: entryDate, balances: entryBalances })

    // reset state in component to be able to add new entries afterwards
    setSelectedDate(new Date())
    setBalances([DEFAULT_NEW_BALANCE])
  }

  const accountSelectorOptions = bankAccounts.map(account => ({
    value: account.id,
    label: account.bankName
  }))

  return (
    <Card interactive={false} elevation={Elevation.FOUR} className="AddBankEntryItem">
      <form onSubmit={handleAddEntry} className="AddBankEntryItem-form">
        <FormGroup label="Date" labelFor="date-input" labelInfo="(required)" inline={true}>
          <DateInput
            value={selectedDate}
            showActionsBar={true}
            onChange={(selectedDate: Date) => setSelectedDate(selectedDate)}
            inputProps={{
              leftIcon: 'calendar',
              id: 'date-input'
            }}
            {...jsDateFormatter}
          />
        </FormGroup>
        <FormGroup className="AddBankEntryItem-balances" label="Accounts' balances" inline={false}>
          {balances.map((balance, index) => {
            return (
              <ControlGroup
                className="AddBankEntryItem-balance"
                fill={false}
                key={`${balance.bankAccountId}__${index}`}
              >
                <HTMLSelect
                  options={accountSelectorOptions}
                  value={balance.bankAccountId}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    handleBalanceBankAccountIdChanged(index, e.currentTarget.value)
                  }
                />
                <NumericInput
                  allowNumericCharactersOnly={true}
                  placeholder="Amount…"
                  leftIcon="dollar"
                  buttonPosition="none"
                  value={balance.amount}
                  onValueChange={(_valueAsNumber: number, valueAsString: string) => {
                    handleBalanceAmountChanged(index, valueAsString)
                  }}
                />
                {index === balances.length - 1 && (
                  <Button
                    className="AddBankEntryItem-new-balance-button"
                    icon="insert"
                    onClick={handleAddNewBalance}
                  />
                )}
              </ControlGroup>
            )
          })}
        </FormGroup>
        <Button
          className="AddBankEntryItem-create-button"
          intent={Intent.PRIMARY}
          icon="new-object"
          type="submit"
          disabled={!selectedDate || balances.length === 0}
        >
          Create
        </Button>
      </form>
    </Card>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    bankAccounts: state.data.bankAccounts
  }
}

export default connect(mapStateToProps)(AddBankEntryItem)
