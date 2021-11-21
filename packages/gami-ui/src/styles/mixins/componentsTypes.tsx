import { css } from '@emotion/react'
import { componentsTheme } from 'styles/tokens'
import { ButtonType, FeatureCardThemeTypes } from 'core/domain/types'

export const mixinComponentsTypes = (
  themeType: 'light' | 'dark',
  typeStyle: ButtonType | FeatureCardThemeTypes,
  element: 'button' | 'link' | 'card' = 'button'
) => {
  const { color, bg, border } = componentsTheme(themeType)[element][typeStyle]

  return css`
    background: ${bg};
    color: ${color};
    border: ${border};
  `
}
