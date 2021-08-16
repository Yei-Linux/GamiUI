import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import { stylesControl } from '../../../core/helpers/storybook.helper'

import Select from '.'

export default {
  title: 'Atoms/Select',
  component: Select,
  args: { ...Select.defaultProps },
  argTypes: {
    placeholder: { control: 'text' },
    ...stylesControl,
  },
} as Meta

export const Basic = () => {
  const [value, setValue] = useState('one')

  const changeValue = (value: any) => {
    console.log(value)
    setValue(value)
  }

  return (
    <Select
      placeholder="Type your option"
      value={value}
      onChangeFormItem={changeValue}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )
}

export const Multiple = () => {
  const [value, setValue] = useState('one')

  const changeValue = (value: any) => {
    console.log(value)
    setValue(value)
  }

  return (
    <Select
      isMultiple
      placeholder="Type your option"
      value={value}
      onChangeFormItem={changeValue}
      options={[
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ]}
    />
  )
}
