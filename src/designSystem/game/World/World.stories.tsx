import React from 'react'
import { Meta } from '@storybook/react'

import World from '.'

export default {
  title: 'Game/World',
  component: World,
  args: { ...World.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <World {...args} />
Basic.args = {}
