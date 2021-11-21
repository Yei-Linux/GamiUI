import React from 'react'
import { Meta } from '@storybook/react'

import Question from '.'

export default {
  title: 'Atoms/Question',
  component: Question,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Question {...args} />
Basic.args = {
  question: 'What type of stay did you choose?',
  description: 'This question is about test reality work',
  iconId: 'two__fingers',
}
