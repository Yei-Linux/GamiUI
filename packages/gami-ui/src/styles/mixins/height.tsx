import { css } from '@emotion/react'
import { HeightType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinHeight = (themeGlobal: ICustomTheme, height: HeightType) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.sizes.height[height]

  if (!tokenValue) return ``

  return css`
    height: ${tokenValue};
  `
}
