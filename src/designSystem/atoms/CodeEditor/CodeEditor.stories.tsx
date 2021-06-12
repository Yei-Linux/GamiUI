import React from 'react'
import { Meta } from '@storybook/react'

import CodeEditor from '.'

export default {
  title: 'Atoms/CodeEditor',
  component: CodeEditor,
  args: { ...CodeEditor.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <CodeEditor {...args} />
Basic.args = {
  height: '100vh',
}
