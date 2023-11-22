import React from 'react'
import Input from '../Input'
import { IInput } from '../Input/Input'

export type INumber = IInput

const Number = ({ onChangeFormItem, ...args }: INumber) => {
  return <Input type="number" onChangeFormItem={onChangeFormItem} {...args} />
}

export default Number
