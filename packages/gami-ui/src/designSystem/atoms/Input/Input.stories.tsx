import React, { useState } from 'react'
import { Meta } from '@storybook/react'

import Input from '.'
import Icon from '../Icon'

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {},
  argTypes: {
    positionPrefix: {
      control: 'select',
      options: ['left', 'right'],
    },
    placeholder: { control: 'text' },
    prefix: {
      options: ['a', 'b'],
      mapping: {
        a: null,
        b: <Icon color="#374a54" />,
      },
      control: {
        type: 'select',
        labels: {
          a: 'withoutIcon',
          b: 'withIcon',
        },
      },
    },
  },
} as Meta

export const BasicInput = () => {
  const [value, setValue] = useState('test')

  const handleChange = (newValue: string) => setValue(newValue)

  return (
    <Input
      placeholder="Type your name"
      width="auto"
      height="auto"
      prefix={null}
      value={value}
      onChangeFormItem={handleChange}
    />
  )
}

export const IconInput = () => {
  const [value, setValue] = useState('')

  const handleChange = (newValue: string) => setValue(newValue)

  return (
    <Input
      placeholder="Type your name"
      width="auto"
      height="auto"
      prefix={<Icon name="user" />}
      value={value}
      onChangeFormItem={handleChange}
      positionPrefix="left"
    />
  )
}
