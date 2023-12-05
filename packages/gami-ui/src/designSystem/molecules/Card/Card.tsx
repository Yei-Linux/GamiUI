import React, { useMemo } from 'react'
import * as S from './Card.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'

import { Footer } from './Footer'
import { Content } from './Content'
import { Cover } from './Cover'
import { TCardComponent } from './type'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export const Card = ({ children, ...genericsProps }: TCardComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'card',
    customPrexiCls: '',
  })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )

  return (
    <S.CardStyled
      {...globalStyles}
      className={cls(handles.wrapper, genericsProps.className ?? '')}
    >
      {children}
    </S.CardStyled>
  )
}

Card.Cover = Cover
Card.Content = Content
Card.Footer = Footer

export default Card
