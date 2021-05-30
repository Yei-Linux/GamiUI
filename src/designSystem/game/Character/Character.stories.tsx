import React from 'react'
import { Meta } from '@storybook/react'

import Character from '.'

export default {
  title: 'Game/Character',
  component: Character,
  args: { ...Character.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Character {...args} />
Basic.args = {}
