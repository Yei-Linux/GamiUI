import React from 'react'
import { THeader } from './type'
import * as S from './Layout.styles'
import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'

export const Header = ({
  children,
  isSticky = false,
  style,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
}: THeader) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'header',
    customPrexiCls: '',
  })

  return (
    <S.HeaderStyled
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={cls(handles.wrapper, className, { sticky: isSticky })}
    >
      {children}
    </S.HeaderStyled>
  )
}

Header.displayName = 'Header'
