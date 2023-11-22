import * as React from 'react'
import * as S from './Tag.styles'

export interface IGroup {
  children: React.ReactNode
  max?: number
  gap?: string
}

export const Group = ({ children, gap = '1rem', max }: IGroup) => {
  const tagSize = React.Children.count(children)
  const applyMaxCount = max && max > 0 && max < tagSize

  const childrenFiltered = applyMaxCount
    ? React.Children.toArray(children).filter((_, index) => index < max)
    : children

  return (
    <S.TagGroup $gap={gap}>
      {childrenFiltered}
      {applyMaxCount && <S.TagSize>+{tagSize - max}</S.TagSize>}
    </S.TagGroup>
  )
}
