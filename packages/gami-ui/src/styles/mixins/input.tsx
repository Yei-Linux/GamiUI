import { css } from '@emotion/react'
import { spacing, defaultTheme } from 'styles/tokens'

export const mixinInput = (themeType: 'light' | 'dark') => css`
  border: none;
  outline: none;
  appearance: none;

  width: 100%;
  height: inherit;
  padding: ${spacing.padding.md};

  transition: input 0.1s ease-in-out;

  &::placeholder {
    color: ${defaultTheme[themeType].neutral[500]};
  }
`
