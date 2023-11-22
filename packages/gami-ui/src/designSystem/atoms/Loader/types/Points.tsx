import React from 'react'
import { css, keyframes } from '@emotion/react'
import * as S from '../Loader.styles'
import { cls } from 'core/utils/cls'
import { ILoaderType } from '../Loader'

const pointsRollerOne = keyframes`
0% {
  transform: scale(0);
}
100% {
  transform: scale(1);
}
`

const pointsRollerTwo = keyframes`
0% {
  transform: translate(0, 0);
}
100% {
  transform: translate(24px, 0);
}
`

const pointsRollerThree = keyframes`
0% {
  transform: scale(1);
}
100% {
  transform: scale(0);
}

`

export const pointsLoader = (background: string) => css`
  background: ${background};

  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: ${pointsRollerOne} 0.6s infinite;
  }

  &:nth-child(2) {
    left: 8px;
    animation: ${pointsRollerTwo} 0.6s infinite;
  }

  &:nth-child(3) {
    left: 32px;
    animation: ${pointsRollerTwo} 0.6s infinite;
  }

  &:nth-child(4) {
    left: 56px;
    animation: ${pointsRollerThree} 0.6s infinite;
  }
`

export const Points = ({ background }: ILoaderType) => {
  const items = 4

  return (
    <S.Loader
      className={cls('loader', 'loader__points')}
      $styles={pointsLoader(background)}
    >
      {Array.from(new Array(items)).map((_, index: number) => (
        <S.Item className={cls('loader__item')} key={index} />
      ))}
    </S.Loader>
  )
}
