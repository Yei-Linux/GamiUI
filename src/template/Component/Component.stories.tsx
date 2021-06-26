import React from 'react'
import { Meta } from '@storybook/react'

import Component from '.'

export default {
  title: 'Atomic/Component',
  component: Component,
  args: { ...Component.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Component {...args} />
Basic.args = {}
