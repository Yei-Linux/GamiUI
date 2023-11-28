import * as React from 'react'
import * as S from './Tag.styles'
import { TGroup } from './type'

export const Group = ({ children, gap = '1rem', max }: TGroup) => {
  const tagSize = React.Children.count(children)
  const applyMaxCount = max && max > 0 && max < tagSize

  const childrenFiltered = applyMaxCount
    ? React.Children.toArray(children).filter((_, index) => index < max)
    : children

  return (
    <S.TagGroupStyled $gap={gap}>
      {childrenFiltered}
      {applyMaxCount && <S.TagSizeStyled>+{tagSize - max}</S.TagSizeStyled>}
    </S.TagGroupStyled>
  )
}
