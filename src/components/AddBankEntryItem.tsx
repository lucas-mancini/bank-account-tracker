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

interface AddBankEntryItemProps {
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void
}

const AddBankEntryItem: React.FC<AddBankEntryItemProps> = ({ onAdd }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <Card
      interactive={false}
      elevation={Elevation.FOUR}
      className="AddBankEntryItem"
    >
      <form onSubmit={onAdd} className="AddBankEntryItem-form">
        <FormGroup
          label="Date"
          labelFor="date-input"
          labelInfo="(required)"
          inline={true}
        >
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
        <FormGroup label="Account balances" labelFor="balances" inline={false}>
          <ControlGroup fill={true} id="balances">
            <HTMLSelect
              options={accountSelectorOptions}
              value="Galicia"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                return console.log(e.currentTarget.value)
              }}
            />
            <NumericInput
              placeholder="Amount…"
              leftIcon="dollar"
              buttonPosition="none"
              value={1500}
              onValueChange={(valueAsNumber: number) =>
                console.log(valueAsNumber)
              }
            />
            <Button
              className="AddBankEntryItem-new-balance-button"
              icon="insert"
              onClick={() => console.log('new balance')}
            />
          </ControlGroup>
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
