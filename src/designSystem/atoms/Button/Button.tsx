import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { ButtonType } from 'core/domain/types'
import * as S from './Button.styles'

export type TButton = 'button' | 'reset' | 'submit'

export interface IButton extends IGeneralProps {
  /**
   * Content Button to show
   */
  children: React.ReactNode
  /**
   * Button Variant
   */
  variant: ButtonType
  /**
   * Button Preffix
   */
  preffix?: React.ReactNode
  /**
   * Button Type Action
   */
  type: TButton
}

const Button = ({
  children,
  variant = 'primary',
  preffix,
  type,
  ...genericsProps
}: IButton) => {
  return (
    <S.Button {...genericsProps} $variant={variant} type={type}>
      {preffix}
      {children}
    </S.Button>
  )
}

export default Button
