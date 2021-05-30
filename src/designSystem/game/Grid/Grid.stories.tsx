import React from 'react'
import { Meta } from '@storybook/react'

import Grid from '.'

export default {
  title: 'Game/Grid',
  component: Grid,
  args: { ...Grid.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Grid {...args} />
Basic.args = {}
