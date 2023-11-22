import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Card.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'

import { Footer } from './Footer'
import { Content } from './Content'
import { Cover } from './Cover'

export interface ICard extends IGeneralProps {
  /**
   * Content Card to show
   */
  children: React.ReactNode
}

export const Card = ({ children, ...genericsProps }: ICard) => (
  <S.Card {...getDesignProps(genericsProps)}>{children}</S.Card>
)

Card.Cover = Cover
Card.Content = Content
Card.Footer = Footer

export default Card
