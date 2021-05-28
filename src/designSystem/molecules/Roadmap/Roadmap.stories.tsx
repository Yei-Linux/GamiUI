import React from 'react'
import { Meta } from '@storybook/react'

import Roadmap from '.'

export default {
  title: 'Molecules/Roadmap',
  component: Roadmap,
  args: { ...Roadmap.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Roadmap {...args} />
Basic.args = {}
