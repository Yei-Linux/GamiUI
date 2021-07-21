import { css } from '@emotion/react'
import { colorLight } from '../theme'

export const inputGeneralStyle = () => css`
  border: 1px solid ${colorLight.neutral.nine};
  transition: all 0.1s ease-in-out;
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
