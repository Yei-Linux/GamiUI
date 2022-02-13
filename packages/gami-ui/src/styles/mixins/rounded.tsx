import { css } from '@emotion/react'
import { RoundedType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinRounded = (
  themeGlobal: ICustomTheme,
  rounded: RoundedType
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.rounded[rounded]

  if (!tokenValue) return ``

  return css`
    border-radius: ${tokenValue};
  `
}
