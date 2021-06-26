import React from 'react'
import Input from '../Input'
import { IInput } from '../Input/Input'

const REGEX__NUMBER = /^[0-9]+$/

export type INumber = IInput

const Number = ({
  onChangeFormItem = () => {
    return
  },
  ...args
}: INumber) => {
  const handleTypying = (value: any) => {
    if (REGEX__NUMBER.test(value)) {
      onChangeFormItem(value)
    }
  }

  return <Input onChangeFormItem={handleTypying} {...args} />
}

Number.defaultProps = {
  width: 'NORMAL',
  heigth: 'SMALL',
}

export default Number
