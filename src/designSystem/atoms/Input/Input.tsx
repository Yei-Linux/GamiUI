import classNames from 'classnames'
import Spacer from 'designSystem/layouts/Spacer'
import React, { Fragment } from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import * as S from './Input.styles'

export type TPositionPrefix = 'left' | 'right'

export type TOnChangeFormItem = (
  value: any,
  ...props: unknown[]
) => unknown | void

export interface IInput extends IGeneralProps {
  /**
   * Placeholder Input to show
   */
  placeholder?: string
  /**
   * Identifier Input
   */
  name?: string
  /**
   * Value Input
   */
  value?: string
  /**
   * Prefix Content Input
   */
  prefix?: React.ReactNode
  /**
   * Prefix Position
   */
  positionPrefix?: TPositionPrefix
  /**
   * Input Type
   */
  type?: 'password' | 'input' | 'number'
  /**
   * Autocomplete action
   */
  autoComplete?: 'off' | 'on'
  /**
   * Function to detect changes
   */
  onChangeFormItem?: TOnChangeFormItem
  /**
   * Is Readonly input
   */
  readOnly?: boolean
}

const Input = ({
  onChangeFormItem,
  readOnly = false,
  autoComplete = 'off',
  type = 'input',
  positionPrefix = 'left',
  prefix = null,
  name = 'gamiUI',
  value,
  placeholder = '',
  ...genericsProps
}: IInput) => {
  const handleChangeOnInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    e.preventDefault()
    onChangeFormItem?.(e.target.value)
  }

  return (
    <S.InputBox
      className={classNames({
        positionPrefixRight: positionPrefix == 'right',
        positionPrefixLeft: positionPrefix == 'left',
      })}
      {...getGenericPropStyles(genericsProps)}
    >
      {prefix && <Fragment>{prefix}</Fragment>}
      {
        <S.Input
          readOnly={readOnly}
          autoComplete={autoComplete}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeOnInput}
        />
      }
    </S.InputBox>
  )
}

export default Input
