import { CSSObject } from '@emotion/serialize'
import React from 'react'
import { OptionProps, OptionTypeBase } from 'react-select'
import { lightTheme } from 'styles/tokens/lightTheme'

import { IInput } from '../Input/Input'
import * as S from './Select.styles'

export interface IOptions {
  value: string
  label: string | React.ReactNode
}

type TSelectValue = OptionTypeBase[] | OptionTypeBase | null | undefined

export interface ISelect extends Omit<IInput, 'value'> {
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
  value?: TSelectValue
}

const Select = ({
  options,
  onChangeFormItem,
  placeholder,
  value,
  isMultiple = false,
  isClearable = false,
}: ISelect) => {
  const colourStyles = {
    option: (
      styles: CSSObject,
      { isSelected, isFocused }: OptionProps<any, any, any>
    ): CSSObject => {
      const getBgOption = () => {
        if (isSelected) return lightTheme.secondary.jordyBlueMedium
        if (isFocused) return lightTheme.secondary.jordyBlueLight
        return 'transparent'
      }

      return {
        ...styles,
        backgroundColor: getBgOption(),
      }
    },
  }

  return (
    <S.ReactSelect
      isClearable={isClearable}
      isMulti={isMultiple}
      classNamePrefix="Select"
      placeholder={placeholder}
      value={value}
      onChange={onChangeFormItem}
      options={options}
      styles={colourStyles}
    />
  )
}

export default Select
