import React from 'react'
import TextArea from '../TextArea'

export interface ITextAreaToWriteProps {
  value?: string
  placeholder?: string
  onChangeFormItem?: (value: any) => any
}

const TextAreaToWrite = ({ value, placeholder, onChangeFormItem }: ITextAreaToWriteProps) => {
  return (
    <TextArea
      value={value}
      placeholder={placeholder}
      width="NORMAL"
      heigth="MEDIUM"
      border="MEDIUM"
      onChangeFormItem={onChangeFormItem}
    />
  )
}

export default TextAreaToWrite
