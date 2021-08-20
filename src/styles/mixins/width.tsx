import { css } from '@emotion/react'
import { WidthType } from 'core/domain/types'

export type TDynamicWidthString = {
  [key in WidthType]: string
}

const WIDTH: TDynamicWidthString = {
  NONE: 'auto',
  SMALL: '0.5rem',
  NORMAL: '1rem',
  MEDIUM: '1.5rem',
  LARGE: '2rem',
  FULL: '100%',
}

export const mixinWidth = (width: WidthType) => css`
  width: ${WIDTH[width]};
`
