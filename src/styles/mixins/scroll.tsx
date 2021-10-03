import { css } from '@emotion/react'
import { borderRadius, sizes, theme } from 'styles/tokens'

export const mixinScroll = (themeType: 'light' | 'dark') => css`
  &::-webkit-scrollbar {
    width: ${sizes.width.xs};
  }

  &::-webkit-scrollbar-track {
    background: #ffffff8a;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme[themeType].primary.jordyBlue};
    border-radius: ${borderRadius.md};
  }
`
