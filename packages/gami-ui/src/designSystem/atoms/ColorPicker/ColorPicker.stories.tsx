import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import ColorPicker from '.'

export default {
  title: 'Atoms/ColorPicker',
  component: ColorPicker,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('')

  return <ColorPicker value={value} onChangeFormItem={setValue} />
}
