import React from 'react'
import { Meta } from '@storybook/react'

import Calendar from '.'

export default {
  title: 'Atoms/Calendar',
  component: Calendar,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Calendar {...args} />
Basic.args = {}

export const WithDefaultDate = (args: any) => <Calendar {...args} />
WithDefaultDate.args = {
  defaultDate: new Date(2022, 10, 12),
}
