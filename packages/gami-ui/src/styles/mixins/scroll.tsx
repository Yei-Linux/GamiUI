import { css } from '@emotion/react'
import { borderRadius, defaultTheme } from 'styles/tokens'

export const mixinScroll = (themeType: 'light' | 'dark') => css`
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${defaultTheme[themeType].neutral[500]};
    border-radius: ${borderRadius.md};
  }
`
