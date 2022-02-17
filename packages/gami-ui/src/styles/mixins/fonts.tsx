import { css } from '@emotion/react'
import { FontWeightType, TextAlignType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinTextAlign = (
  themeGlobal: ICustomTheme,
  textAlign: TextAlignType
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.font.textAlign[textAlign]

  if (!tokenValue) return ``

  return css`
    text-align: ${tokenValue};
  `
}

export const mixinFontWeight = (
  themeGlobal: ICustomTheme,
  fontWeight: FontWeightType
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.font.weight[fontWeight]

  if (!tokenValue) return ``

  return css`
    font-weight: ${tokenValue};
  `
}

export const mixinTitle = (themeGlobal: ICustomTheme) => {
  const { theme, tokens } = themeGlobal

  if (!theme && !tokens) return

  return css`
    ${mixinFontWeight(themeGlobal, 'bold')}
    font-size: ${tokens.font.size.md};
    color: ${theme.neutral[0]};
  `
}

export const mixinSubtitle = (themeGlobal: ICustomTheme) => {
  const { theme, tokens } = themeGlobal

  if (!theme && !tokens) return

  return css`
    font-size: ${tokens.font.size.sm};
    color: ${theme.neutral[300]};
  `
}

export const mixinDescription = (
  themeGlobal: ICustomTheme,
  color: string | null = null
) => {
  const { theme, tokens } = themeGlobal

  if (!theme && !tokens) return

  return css`
    font-size: ${tokens.font.size.xs};
    color: ${color ?? theme.neutral[300]};
  `
}
