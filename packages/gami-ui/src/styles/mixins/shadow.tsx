import { css } from '@emotion/react'
import { ShadowType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinShadow = (
  themeGlobal: ICustomTheme,
  shadowType: ShadowType
) => {
  if (!themeGlobal) return css``
  const { tokens } = themeGlobal

  const tokenValue = tokens.boxShadow[shadowType]
  if (!tokenValue) return css``

  return css`
    box-shadow: ${tokenValue};
  `
}
