import * as React from 'react'
import * as S from './Card.styles'
import { TFooter } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export const Footer = ({ children, ...props }: TFooter) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'cardFooter',
    customPrexiCls: '',
  })

  return (
    <S.FooterStyled
      {...props}
      className={cls(handles.wrapper, props.className ?? '')}
    >
      {children}
    </S.FooterStyled>
  )
}
