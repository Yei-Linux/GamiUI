import React from 'react'
import { Meta } from '@storybook/react'

import Pagination from '.'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {},
  argTypes: {},
} as Meta

export const Basic = (args: any) => <Pagination {...args} />
Basic.args = {
  numberPages: 5,
}

export const WithSeven = (args: any) => <Pagination {...args} />
WithSeven.args = {
  numberPages: 7,
}

export const WithTen = (args: any) => <Pagination {...args} />
WithTen.args = {
  numberPages: 10,
}
