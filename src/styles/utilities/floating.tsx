import { css } from '@emotion/react'
import { mediaQuery } from './breakpoints'

export const floatingRight = () => css`
  margin: auto;
  right: 10px;

  ${mediaQuery('md')} {
    top: 40%;
  }
`

export const floatingLeft = () => css`
  margin: auto;
  left: 10px;

  ${mediaQuery('md')} {
    top: 40%;
  }
`

export const floatingTop = () => css`
  margin: auto;
  top: 10px;

  ${mediaQuery('md')} {
    left: 40%;
  }
`

export const floatingBottom = () => css`
  margin: auto;
  bottom: 10px;

  ${mediaQuery('md')} {
    left: 40%;
  }
`
