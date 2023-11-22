import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import * as React from 'react'
import * as S from './Card.styles'

export interface IFooter {
  children: React.ReactNode
  className?: string
}

export const Footer = ({ children, ...props }: IFooter & IGenericEvents) => (
  <S.Footer {...props}>{children}</S.Footer>
)
