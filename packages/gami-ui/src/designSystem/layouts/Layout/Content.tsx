import React from 'react'
import * as S from './Layout.styles'
import { TLayoutElement } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export const Content = ({
  children,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: TLayoutElement) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'content',
    customPrexiCls: '',
  })

  return (
    <S.ContentStyled
      style={style}
      className={cls(handles.wrapper, className ?? '')}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </S.ContentStyled>
  )
}

Content.displayName = 'Content'
