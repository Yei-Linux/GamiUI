import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import Spacer from 'designSystem/layouts/Spacer'
import * as React from 'react'
import {
  TitleContainer,
  SubtitleContainer,
} from 'styles/utilities/commonComponent'
import * as S from './Card.styles'

export interface IContent {
  title: React.ReactNode
  description: React.ReactNode
  className?: string
}

export const Content = ({
  title,
  description,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: IContent & IGenericEvents) => (
  <S.Content
    className={className}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <TitleContainer>{title}</TitleContainer>
    <Spacer direction="bottom" />
    <SubtitleContainer>{description}</SubtitleContainer>
  </S.Content>
)
