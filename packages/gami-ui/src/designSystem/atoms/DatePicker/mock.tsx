import React, { useState } from 'react'
import DatePicker from './DatePicker'

export const WithBasic = () => {
  const [value, setValue] = useState()

  return <DatePicker value={value} onChangeFormItem={setValue} />
}

export const WithTooltipAbove = () => {
  const [value, setValue] = useState()

  return (
    <div>
      <div
        style={{ height: '400px', width: '300px', background: 'white' }}
      ></div>
      <DatePicker value={value} onChangeFormItem={setValue} />
    </div>
  )
}

export const WithDefault = () => {
  const [value, setValue] = useState(new Date(2022, 10, 12))

  return <DatePicker value={value} onChangeFormItem={setValue} />
}
