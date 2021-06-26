import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { ButtonType } from '../../../core/domain/types'
import { ButtonWrapper } from './Button.styles'

export interface IButton extends IGeneralProps {
  /**
   * Content Button to show
   */
  children: React.ReactNode
  /**
   * Button Type
   */
  type: ButtonType
  /**
   * Button Preffix
   */
  preffix?: React.ReactNode
}

const Button = ({ children, type, preffix, ...args }: IButton) => {
  return (
    <ButtonWrapper {...args} typeStyle={type} type="submit">
      {preffix && preffix}
      {children}
    </ButtonWrapper>
  )
}

Button.defaultProps = {
  type: 'primary',
  border: 'MEDIUM',
  shadow: 'MEDIUM',
  heigth: 'SMALL',
  width: 'SMALL',
}

export default Button
