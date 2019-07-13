import React from 'react'
import './AddBankEntryItem.scss'
import { Card, Elevation } from '@blueprintjs/core'

const AddBankEntryItem: React.FC = () => {
  return (
    <Card
      interactive={false}
      elevation={Elevation.FOUR}
      className="AddBankEntryItem"
    >
      Test
    </Card>
  )
}

export default AddBankEntryItem
