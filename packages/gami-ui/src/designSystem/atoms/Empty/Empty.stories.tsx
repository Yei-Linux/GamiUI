import React from 'react'
import { Meta } from '@storybook/react'

import Empty from '.'

export default {
  title: 'Atoms/Empty',
  component: Empty,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Empty {...args} />
Basic.args = {}
