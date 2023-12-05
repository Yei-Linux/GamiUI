import React from 'react'
import * as S from './Tab.styles'

export interface ITabAnimation {
  left: string
  width?: number
}

export const TabAnimation = ({ left, width = 33 }: ITabAnimation) => {
  return <S.TabAnimation $left={left} $width={`${width}px`} />
}
