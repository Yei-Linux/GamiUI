import React from 'react'
import { Meta } from '@storybook/react'

import Chat from '.'

export default {
  title: 'Molecules/Chat',
  component: Chat,
  args: { ...Chat.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Chat {...args} />
Basic.args = {}
