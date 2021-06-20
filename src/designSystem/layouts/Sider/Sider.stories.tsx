import React from 'react'
import { Meta } from '@storybook/react'

import Sider from '.'

export default {
  title: 'Layout/Sider',
  component: Sider,
  args: { ...Sider.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Sider {...args} />
Basic.args = {}
