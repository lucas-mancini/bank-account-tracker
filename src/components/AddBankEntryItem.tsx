import React, { useState } from 'react'
import { Card, Elevation, Button, Intent, FormGroup } from '@blueprintjs/core'
import { DateInput, IDateFormatProps } from '@blueprintjs/datetime'
import { formatDate } from '../util/helpers'
import './AddBankEntryItem.scss'

const jsDateFormatter: IDateFormatProps = {
  formatDate: formatDate,
  parseDate: str => new Date(str),
  placeholder: 'MMM DD, YYYY'
}

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
        <Button
          className="AddBankEntryItem-button"
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
