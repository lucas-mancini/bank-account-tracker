import React from 'react'
import './AddBankEntryItem.scss'
import { Card, Elevation, Button, Intent } from '@blueprintjs/core'

const AddBankEntryItem: React.FC = () => {
  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('new item added')
  }

  return (
    <Card
      interactive={false}
      elevation={Elevation.FOUR}
      className="AddBankEntryItem"
    >
      <form onSubmit={handleAdd}>
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
