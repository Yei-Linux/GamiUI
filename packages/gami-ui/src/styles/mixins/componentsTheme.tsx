import { css } from '@emotion/react'
import { ButtonType, FeatureCardThemeTypes } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinComponentsTheme = (
  emotionTheme: ICustomTheme,
  typeStyle: ButtonType | FeatureCardThemeTypes,
  element: 'button' | 'link' | 'card' = 'button'
) => {
  const { componentsTheme } = emotionTheme

  if (!componentsTheme) return ``

  const { color, bg, border } = componentsTheme[element][typeStyle]

  return css`
    background: ${bg};
    color: ${color};
    border: ${border};
  `
}
