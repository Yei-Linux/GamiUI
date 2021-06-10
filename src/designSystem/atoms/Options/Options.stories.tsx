import React from 'react'
import { Meta } from '@storybook/react'

import Options from '.'

export default {
  title: 'Atoms/Options',
  component: Options,
  args: { ...Options.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Options {...args} />
Basic.args = {}
