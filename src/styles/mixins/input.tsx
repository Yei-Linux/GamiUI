import { css } from '@emotion/react'
import { theme } from 'styles/tokens'

export const mixinInput = (themeType: 'light' | 'dark') => css`
  border: none;
  outline: none;
  appearance: none;

  height: inherit;

  transition: input 0.1s ease-in-out;

  &::placeholder {
    color: ${theme[themeType].neutral[500]};
  }

  input[type='password'] {
    font-family: system-ui;
  }
`