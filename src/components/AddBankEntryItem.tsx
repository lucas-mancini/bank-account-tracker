import React, { useState } from 'react'
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
import { formatDate } from '../util/helpers'
import BankAccounts from '../config/BankAccounts'
import './AddBankEntryItem.scss'

const jsDateFormatter: IDateFormatProps = {
  formatDate: formatDate,
  parseDate: str => new Date(str),
  placeholder: 'MMM DD, YYYY'
}

const accountSelectorOptions = BankAccounts.map(account => ({
  value: account.id,
  label: account.bankName
}))

const DEFAULT_NEW_BALANCE = {
  bankAccountId: accountSelectorOptions[0].value,
  amount: NumericInput.VALUE_EMPTY
}

interface AddBankEntryItemProps {
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void
}

const AddBankEntryItem: React.FC<AddBankEntryItemProps> = ({ onAdd }) => {
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

  return (
    <Card interactive={false} elevation={Elevation.FOUR} className="AddBankEntryItem">
      <form onSubmit={onAdd} className="AddBankEntryItem-form">
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
        >
          Create
        </Button>
      </form>
    </Card>
  )
}

export default AddBankEntryItem
