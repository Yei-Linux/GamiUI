import React from 'react'

import { IInput } from '../Input/Input'
import * as S from './Select.styles'

export interface IOptions {
  value: string
  label: string
}

export interface ISelect extends IInput {
  /**
   * Children Element
   */
  options?: IOptions[]
  /**
   * Multiple Option
   */
  isMultiple?: boolean
  /**
   * isClearable Option
   */
  isClearable?: boolean
}

const Select = ({
  options,
  onChangeFormItem,
  placeholder,
  value,
  isMultiple = false,
  isClearable = false,
}: ISelect) => {
  return (
    <S.ReactSelect
      isClearable={isClearable}
      isMulti={isMultiple}
      classNamePrefix="Select"
      placeholder={placeholder}
      value={value}
      onChange={onChangeFormItem}
      options={options}
    />
  )
}

Select.defaultProps = {
  width: 'NORMAL',
  heigth: 'SMALL',
}

export default Select
