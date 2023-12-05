import React, { Fragment } from 'react'
import { TFormCustomField } from './type'

export const FormCustomField = ({
  render,
  onChangeFormItem,
  value,
}: TFormCustomField) => {
  return <Fragment>{render({ onChangeFormItem, value })}</Fragment>
}
