import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import TextEditor from '.'

export default {
  title: 'Atoms/TextEditor',
  component: TextEditor,
  args: { ...TextEditor.defaultProps },
  argTypes: {},
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('')

  return <TextEditor defaultValue={value} onChange={setValue} />
}
Basic.args = {}
