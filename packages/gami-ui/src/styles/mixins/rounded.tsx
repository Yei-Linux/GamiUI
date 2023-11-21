import { css } from '@emotion/react'
import { RoundedType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinRounded = (
  themeGlobal: ICustomTheme,
  rounded: RoundedType
) => {
  if (!themeGlobal) return css``
  const { tokens } = themeGlobal

  const tokenValue = tokens.rounded[rounded]
  if (!tokenValue) return css``

  return css`
    border-radius: ${tokenValue};
  `
}
