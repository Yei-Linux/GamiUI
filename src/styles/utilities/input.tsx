import { css } from '@emotion/react'
import { colorLight } from '../theme'

export const inputGeneralStyle = () => css`
  border: none;
  transition: all 0.1s ease-in-out;

  input[type='password'] {
    font-family: system-ui;
  }
`

export const inputBasicStyle = () => css`
  outline: none;
  appearance: none;
  padding-left: 1rem;
  height: inherit;

  &::placeholder {
    color: ${colorLight.neutral.five};
  }
`
