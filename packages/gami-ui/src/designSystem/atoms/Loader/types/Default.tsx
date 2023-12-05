import React from 'react'
import { css, keyframes } from '@emotion/react'
import * as S from '../Loader.styles'
import { cls } from 'core/utils/cls'
import { TLoaderType } from '../type'

const roller = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const defaultLoader = (background: string) =>
  css({
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: '64px',
    height: '64px',
    margin: '8px',
    borderRadius: '50%',
    animation: `${roller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    border: `3px solid ${background}`,
    borderColor: `${background} transparent transparent transparent`,
    '&:nth-child(1)': {
      animationDelay: '-0.45s',
    },
    '&:nth-child(2)': {
      animationDelay: '-0.3s',
    },
    '&:nth-child(3)': {
      animationDelay: '-0.15s',
    },
  })

export const Default = ({ background }: TLoaderType) => {
  const items = 3

  return (
    <S.LoaderTypeStyled
      className={cls('loader', 'loader__default')}
      $styles={defaultLoader(background)}
    >
      {Array.from(new Array(items)).map((_, index: number) => (
        <S.ItemStyled className={cls('loader__item')} key={index} />
      ))}
    </S.LoaderTypeStyled>
  )
}
