import React from 'react'
import {
  SubtitleContainer,
  TitleContainer,
} from 'styles/utilities/commonComponent'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Card.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

export interface ICard extends IGeneralProps {
  /**
   * Content Card to show
   */
  children: React.ReactNode
}

export const Card = ({ children, ...genericsProps }: ICard) => (
  <S.Card {...getGenericPropStyles(genericsProps)}>{children}</S.Card>
)

Card.Cover = ({ children }: { children: React.ReactNode }) => (
  <S.Cover>{children}</S.Cover>
)

Card.Content = ({
  title,
  description,
}: {
  title: React.ReactNode
  description: React.ReactNode
}) => (
  <S.Content>
    <TitleContainer>{title}</TitleContainer>
    <SubtitleContainer>{description}</SubtitleContainer>
  </S.Content>
)

Card.Footer = ({ children }: { children: React.ReactNode }) => (
  <S.Footer>{children}</S.Footer>
)

export default Card
