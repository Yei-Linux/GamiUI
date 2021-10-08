import React from 'react'
import { Meta } from '@storybook/react'

import CodeBlock from '.'

export default {
  title: 'Molecules/CodeBlock',
  component: CodeBlock,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <CodeBlock {...args} />
Basic.args = {}
