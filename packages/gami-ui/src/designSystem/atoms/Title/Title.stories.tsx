import React from 'react'
import { Meta } from '@storybook/react'

import Title from '.'

export default {
  title: 'Atoms/Title',
  component: Title,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Title {...args}>Titulo h1</Title>
Basic.args = {
  margin: 'xs:0 0 1rem 0',
  padding: 'xs:0 0 0 0',
}
