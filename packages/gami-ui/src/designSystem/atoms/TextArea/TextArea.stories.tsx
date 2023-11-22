import React from 'react'
import { Meta } from '@storybook/react'

import TextArea from '.'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  args: {},
  argTypes: {
    placeholder: { control: 'text' },
  },
} as Meta

export const BasicTextArea = (args: any) => <TextArea {...args} />
BasicTextArea.args = {
  placeholder: 'Type your text',
  width: 'full',
}
