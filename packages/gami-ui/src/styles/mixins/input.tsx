import { css } from '@emotion/react'
import { defaultTheme } from 'styles/tokens'
import { lightTheme } from 'styles/tokens/lightTheme'

export const mixinInput = (
  themeType: 'light' | 'dark',
  backgroundColor = 'white'
) => css`
  outline: none;
  appearance: none;

  width: 100%;
  height: inherit;

  ${backgroundColor &&
  css`
    background-color: ${backgroundColor};
  `}
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;

  &::placeholder {
    color: ${defaultTheme[themeType].neutral[300]};
  }

  border: none;

  border-bottom: 1px solid ${lightTheme.neutral[500]};
  &:focus {
    border-bottom: 1px solid ${lightTheme.primary.mediumPurple};
  }

  transition: border-bottom 0.1s ease-in-out;
`
