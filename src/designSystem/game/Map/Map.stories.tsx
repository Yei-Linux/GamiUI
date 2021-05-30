import React from 'react'
import { Meta } from '@storybook/react'

import Map from '.'

export default {
  title: 'Game/Map',
  component: Map,
  args: { ...Map.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Map {...args} />
Basic.args = {}
