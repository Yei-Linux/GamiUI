import { TOnChangeFormItem } from 'designSystem/atoms/Input/Input'
import React, { Fragment } from 'react'

export type TFormCustomField = 'string' | 'number' | 'object'

export interface IFormCustomField {
  /**
   * Type
   */
  type: TFormCustomField
  /**
   * Render
   */
  render: (props: {
    onChangeFormItem?: TOnChangeFormItem
    value?: any
  }) => React.ReactNode
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Value Input
   */
  value?: any
}

export const FormCustomField = ({
  render,
  onChangeFormItem,
  value,
}: IFormCustomField) => {
  return <Fragment>{render({ onChangeFormItem, value })}</Fragment>
}
