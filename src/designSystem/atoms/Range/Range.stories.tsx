import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Range from '.'

export default {
  title: 'Atoms/Range',
  component: Range,
  args: { ...Range.defaultProps },
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState([0])

  return <Range value={value} onChangeFormItem={setValue} />
}
Basic.args = {}
