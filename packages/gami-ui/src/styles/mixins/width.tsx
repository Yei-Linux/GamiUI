import { css } from '@emotion/react'
import { InheritStyleComponent, WidthType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinWidth = (
  themeGlobal: ICustomTheme,
  width: WidthType,
  component: InheritStyleComponent = null
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenComponentsValue = tokens.sizes.components

  if (component) {
    const tokenComponentSizeValue = tokenComponentsValue[component]

    if (!tokenComponentSizeValue) return ``

    const widthComponent = tokenComponentSizeValue[width]

    if (!widthComponent) return ``

    return css`
      width: ${widthComponent};
    `
  }

  const tokenValue = tokens.sizes.width[width]

  if (!tokenValue) return ``

  return css`
    width: ${tokenValue};
  `
}
