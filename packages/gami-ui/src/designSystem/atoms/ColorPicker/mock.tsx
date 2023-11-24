import React, { useState } from 'react'
import ColorPicker from './ColorPicker'

export const WithColorPickerInteraction = () => {
  const [value, setValue] = useState('')

  return <ColorPicker value={value} onChangeFormItem={setValue} />
}
