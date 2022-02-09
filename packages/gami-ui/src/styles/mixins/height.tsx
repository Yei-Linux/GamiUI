import { css } from '@emotion/react'
import { HeightType, InheritStyleComponent } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const mixinHeight = (
  themeGlobal: ICustomTheme,
  height: HeightType,
  component: InheritStyleComponent = null
) => {
  if (!themeGlobal) return ``

  const { tokens } = themeGlobal

  const tokenValue = tokens.sizes.height[height]

  const tokenComponentsValue = tokens.sizes.components

  if (component) {
    const tokenComponentSizeValue = tokenComponentsValue[component]

    if (!tokenComponentSizeValue) return ``

    const heightComponent = tokenComponentSizeValue[height]

    if (!heightComponent) return ``

    return css`
      height: ${heightComponent};
    `
  }

  if (!tokenValue) return ``

  return css`
    height: ${tokenValue};
  `
}
