import { Meta } from '@storybook/react'
import {
  getTemplate,
  stylesControl,
} from 'core/helpers/storybook.helper'

import Message from '.'

const Template = getTemplate(Message)

export default {
  title: 'Atoms/Message',
  component: Message,
  args: {},
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const BasicMessageLeft = Template.bind({})
BasicMessageLeft.args = {
  width: 'auto',
  shadow: 'none',
}

export const BasicMessageRight = Template.bind({})
BasicMessageRight.args = {
  width: 'auto',
  direction: 'right',
  shadow: 'none',
}
