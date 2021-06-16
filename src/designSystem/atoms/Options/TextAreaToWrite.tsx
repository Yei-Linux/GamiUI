import React from 'react'
import TextArea from '../TextArea'

export interface ITextAreaToWriteProps {
  value?: string
  placeholder?: string
}

const TextAreaToWrite = ({ value, placeholder }: ITextAreaToWriteProps) => {
  return (
    <TextArea
      value={value}
      placeholder={placeholder}
      width="NORMAL"
      heigth="MEDIUM"
      border="MEDIUM"
    />
  )
}

export default TextAreaToWrite
