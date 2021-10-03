import React from 'react'
import { OptionTypeBase } from 'react-select'

import { IInput } from '../Input/Input'
import * as S from './Select.styles'

export interface IOptions {
  value: string
  label: string
}

type TSelectValue = OptionTypeBase[] | OptionTypeBase | null | undefined

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
  /**
   * isClearable Option
   */
  selectValue?: TSelectValue
}

const Select = ({
  options,
  onChangeFormItem,
  placeholder,
  selectValue,
  isMultiple = false,
  isClearable = false,
}: ISelect) => {
  return (
    <S.ReactSelect
      isClearable={isClearable}
      isMulti={isMultiple}
      classNamePrefix="Select"
      placeholder={placeholder}
      value={selectValue}
      onChange={onChangeFormItem}
      options={options}
    />
  )
}

export default Select
