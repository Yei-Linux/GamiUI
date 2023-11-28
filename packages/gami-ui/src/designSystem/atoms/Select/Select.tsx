import { CSSObject } from '@emotion/serialize'
import React from 'react'
import { OptionProps } from 'react-select'
import { lightTheme } from 'styles/tokens/lightTheme'

import * as S from './Select.styles'
import { TSelectComponent } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'

const Select = ({
  options,
  onChangeFormItem,
  placeholder,
  value,
  isMultiple = false,
  isClearable = false,
}: TSelectComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'select',
    customPrexiCls: '',
  })

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
    <S.ReactSelectStyled
      className={cls(handles.wrapper)}
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

const defaultProps = {}

Select.displayName = 'Select'

type SelectComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Select,
  defaultProps
) as SelectComponent<TSelectComponent>
