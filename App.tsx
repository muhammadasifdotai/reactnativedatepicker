import React, { useState } from 'react'
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

export default function App(): JSX.Element {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        // mode={'datetime'}
        // mode={'date'}
        mode={'time'}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}