import { css } from '@emotion/react'
import { HeightType, InheritStyleComponent } from 'core/domain/types'
import {
  IComponentSize,
  ICustomTheme,
} from 'providers/ThemeGamification/ThemeGamification'
import { staticsSizesTokens } from 'styles/tokens/sizes'

//TODO: Refactoring
export const mixinHeight = (
  themeGlobal: ICustomTheme,
  height: HeightType,
  component: InheritStyleComponent = null
) => {
  if (!themeGlobal) return css``

  const { tokens } = themeGlobal

  const tokenValue = tokens.sizes.height[height]

  const tokenComponentsValue = tokens.sizes.components

  if (component) {
    const tokenComponentSizeValue = tokenComponentsValue[component]

    if (!tokenComponentSizeValue) return css``

    const sizeComponent = tokenComponentSizeValue[height]

    if (!sizeComponent) return css``

    const typeOfSize = typeof sizeComponent

    const heightComponent =
      typeOfSize == 'string'
        ? (sizeComponent as string)
        : (sizeComponent as IComponentSize)?.height

    const isStaticSizeTokenValue = staticsSizesTokens.includes(heightComponent)

    return isStaticSizeTokenValue
      ? css`
          height: ${heightComponent};
        `
      : css`
          height: auto;
          min-height: ${heightComponent};
        `
  }

  if (!tokenValue) return css``

  const isStaticSizeTokenValue = staticsSizesTokens.includes(tokenValue)

  return isStaticSizeTokenValue
    ? css`
        height: ${tokenValue};
      `
    : css`
        height: auto;
        min-height: ${tokenValue};
      `
}
