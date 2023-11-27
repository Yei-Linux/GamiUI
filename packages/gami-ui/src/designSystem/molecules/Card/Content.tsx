import Spacer from 'designSystem/layouts/Spacer'
import * as React from 'react'
import {
  TitleContainer,
  SubtitleContainer,
} from 'styles/utilities/commonComponent'
import * as S from './Card.styles'
import { TContent } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export const Content = ({
  title,
  description,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className,
}: TContent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      title: ['title'],
      spacer: ['spacer'],
      subtitle: ['subtitle'],
    },
    componentPrefixCls: 'cardContent',
    customPrexiCls: '',
  })

  return (
    <S.ContentStyled
      className={cls(handles.wrapper, className ?? '')}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <TitleContainer className={cls(handles.title)}>{title}</TitleContainer>
      <Spacer direction="bottom" className={cls(handles.spacer)} />
      <SubtitleContainer className={cls(handles.subtitle)}>
        {description}
      </SubtitleContainer>
    </S.ContentStyled>
  )
}
