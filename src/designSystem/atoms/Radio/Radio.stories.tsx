import React from 'react'
import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Radio from '.'

export default {
  title: 'Atoms/Radio',
  component: Radio,
  args: {},
  argTypes: {
    ...stylesControl,
  },
} as Meta

export const Basic = (args: any) => {
  return (
    <Radio {...args}>
      <Radio.Item isChecked value="one">
        A
      </Radio.Item>
      <Radio.Item value="two">B</Radio.Item>
      <Radio.Item value="three">C</Radio.Item>
    </Radio>
  )
}
Basic.args = {
  width: 'md',
  heigth: 'sm',
  shadow: 'none',
}
