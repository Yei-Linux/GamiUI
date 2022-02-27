import { css } from '@emotion/react'
import { rounded, defaultTheme } from 'styles/tokens'

export const mixinScroll = (themeType: 'light' | 'dark') => css`
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${defaultTheme[themeType].neutral[500]};
    border-radius: ${rounded.md};
  }
`
