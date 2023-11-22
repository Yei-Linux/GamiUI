import React from 'react'
import { css, keyframes } from '@emotion/react'
import * as S from '../Loader.styles'
import { cls } from 'core/utils/cls'
import { ILoaderType } from '../Loader'

const roller = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const defaultLoader = (background: string) => css`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  animation: ${roller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border: 3px solid ${background};
  border-color: ${background} transparent transparent transparent;

  &:nth-child(1) {
    animation-delay: -0.45s;
  }

  &:nth-child(2) {
    animation-delay: -0.3s;
  }

  &:nth-child(3) {
    animation-delay: -0.15s;
  }
`

export const Default = ({ background }: ILoaderType) => {
  const items = 3

  return (
    <S.Loader
      className={cls('loader', 'loader__default')}
      $styles={defaultLoader(background)}
    >
      {Array.from(new Array(items)).map((_, index: number) => (
        <S.Item className={cls('loader__item')} key={index} />
      ))}
    </S.Loader>
  )
}
