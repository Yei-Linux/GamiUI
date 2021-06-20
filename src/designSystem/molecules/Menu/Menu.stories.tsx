import React from 'react'
import { Meta } from '@storybook/react'

import Menu from '.'

export default {
  title: 'Molecules/Menu',
  component: Menu,
  args: { ...Menu.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Menu {...args} />
Basic.args = {}
