import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Range from '.'

export default {
  title: 'Atoms/Range',
  component: Range,
  args: {},
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState([0])

  return (
    <Range
      value={value}
      onChangeFormItem={(value: number[]) => setValue(value)}
    />
  )
}
Basic.args = {}
