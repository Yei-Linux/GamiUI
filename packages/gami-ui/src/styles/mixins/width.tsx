import { css } from '@emotion/react'
import { WidthType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinWidth = (themeGlobal: ICustomTheme, width: WidthType) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.sizes.width[width]

  if (!tokenValue) return ``

  return css`
    width: ${tokenValue};
  `
}
