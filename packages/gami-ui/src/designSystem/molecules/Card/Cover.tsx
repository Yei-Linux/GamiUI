import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import * as React from 'react'
import * as S from './Card.styles'

export interface ICover {
  children: React.ReactNode
  className?: string
}

export const Cover = ({ children, ...props }: ICover & IGenericEvents) => (
  <S.Cover {...props}>{children}</S.Cover>
)
