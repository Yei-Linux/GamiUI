import { css } from '@emotion/react'
import { colorLight } from '../theme'

export const inputGeneralStyle = () => css`
  border: 1px solid ${colorLight.neutral.five};
  transition: all 0.1s ease-in-out;

  &:focus,
  &:hover {
    border: 2px solid ${colorLight.primary.one};
    box-shadow: 0 0 0 2px ${colorLight.primary.oneLight};
  }
`

export const inputBasicStyle = () => css`
  outline: none;
  appearance: none;
  padding-left: 1rem;

  &::placeholder {
    color: ${colorLight.neutral.four};
  }
`
