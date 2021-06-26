import React from 'react'
import { Meta } from '@storybook/react'

import Mask from '.'

export default {
  title: 'Atoms/Mask',
  component: Mask,
  args: { ...Mask.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Mask {...args} />
Basic.args = {}
