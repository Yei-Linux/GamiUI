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

export const SpinnerLoader = (background: string) =>
  css({
    animation: `${roller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    transformOrigin: '40px 40px',
    '&::after': {
      background: background,
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      margin: '-4px 0 0 -4px',
    },
    '&:nth-child(1)': {
      animationDelay: '-0.036s',
      '&::after': {
        top: '63px',
        left: '63px',
      },
    },
    '&:nth-child(2)': {
      animationDelay: '-0.072s',
      '&::after': {
        top: '68px',
        left: '56px',
      },
    },
    '&:nth-child(3)': {
      animationDelay: '-0.108s',
      '&::after': {
        top: '71px',
        left: '48px',
      },
    },
    '&:nth-child(4)': {
      animationDelay: '-0.144s',
      '&::after': {
        top: '72px',
        left: '40px',
      },
    },
    '&:nth-child(5)': {
      animationDelay: ' -0.18s',
      '&::after': {
        top: '71px',
        left: '32px',
      },
    },
    '&:nth-child(6)': {
      animationDelay: '-0.216s',
      '&::after': {
        top: '68px',
        left: '24px',
      },
    },
    '&:nth-child(7)': {
      animationDelay: '-0.252s',
      '&::after': {
        top: '63px',
        left: '17px',
      },
    },
    '&:nth-child(8)': {
      animationDelay: '-0.288s',
      '&::after': {
        top: '56px',
        left: '12px',
      },
    },
  })

export const Spinner = ({ background }: TLoaderType) => {
  const items = 8

  return (
    <S.LoaderTypeStyled
      className={cls('loader', 'loader__spinner')}
      $styles={SpinnerLoader(background)}
    >
      {Array.from(new Array(items)).map((_, index: number) => (
        <S.ItemStyled className={cls('loader__item')} key={index} />
      ))}
    </S.LoaderTypeStyled>
  )
}
