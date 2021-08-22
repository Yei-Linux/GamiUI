import { css } from '@emotion/react'
import { FontWeightType, TextAlignType } from 'core/domain/types'
import { theme, font } from 'styles/tokens'

export const mixinTextAlign = (textAlign: TextAlignType) => css`
  text-align: ${font.textAlign[textAlign]};
`

export const mixinFontWeight = (fontWeight: FontWeightType) => css`
  font-weight: ${font.weight[fontWeight]};
`

export const mixinTitle = (themeType: 'light' | 'dark') => css`
  ${mixinFontWeight('bold')}
  font-size: ${font.size.md};
  color: ${theme[themeType].neutral[0]};
`

export const mixinSubtitle = (themeType: 'light' | 'dark') => css`
  font-size: ${font.size.sm};
  color: ${theme[themeType].neutral[300]};
`

export const mixinDescription = (themeType: 'light' | 'dark') => css`
  font-size: ${font.size.xs};
  color: ${theme[themeType].neutral[500]};
`
