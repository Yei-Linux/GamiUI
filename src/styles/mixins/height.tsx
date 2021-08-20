import { css } from '@emotion/react'
import { HeightType } from 'core/domain/types'

export type TDynamicHeightString = {
  [key in HeightType]: string
}

const HEIGHT: TDynamicHeightString = {
  NONE: 'auto',
  SMALL: '0.5rem',
  NORMAL: '1rem',
  MEDIUM: '1.5rem',
  LARGE: '2rem',
  FULL: '100%',
}

export const mixinHeight = (height: HeightType) => css`
  height: ${HEIGHT[height]};
`
