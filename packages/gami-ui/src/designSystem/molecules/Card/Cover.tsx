import * as React from 'react'
import * as S from './Card.styles'
import { TCover } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export const Cover = ({ children, ...props }: TCover) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'cardCover',
    customPrexiCls: '',
  })

  return (
    <S.CoverStyled
      {...props}
      className={cls(handles.wrapper, props.className ?? '')}
    >
      {children}
    </S.CoverStyled>
  )
}
