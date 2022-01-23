import { css } from '@emotion/react'
import { BorderType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinBorderRadius = (
  themeGlobal: ICustomTheme,
  border: BorderType
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.borderRadius[border]

  if (!tokenValue) return ``

  return css`
    border-radius: ${tokenValue};
  `
}
