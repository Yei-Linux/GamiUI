import { css } from '@emotion/react'
import { BorderType } from 'core/domain/types'

export type TDynamicBorderString = {
    [key in BorderType]: string
}

const BORDER : TDynamicBorderString = {
  NONE: '0px',
  SMALL: '0.3em',
  MEDIUM: '0.4em',
  LARGE: '0.9em',
  ROUNDED: '1em',
  FULL: '3em',
}

export const mixinBorder = (border: BorderType) => css`
  border-radius: ${BORDER[border]};
`
