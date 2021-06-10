import React from 'react'
import { Meta } from '@storybook/react'

import Title from '.'

export default {
  title: 'Atoms/Title',
  component: Title,
  args: { ...Title.defaultProps },
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Title {...args}>Titulo h1</Title>
Basic.args = {}
