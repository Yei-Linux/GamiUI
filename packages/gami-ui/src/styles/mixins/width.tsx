import { css } from '@emotion/react'
import { InheritStyleComponent, WidthType } from 'core/domain/types'
import {
  IComponentSize,
  ICustomTheme,
} from 'providers/ThemeGamification/ThemeGamification'
import { staticsSizesTokens } from 'styles/tokens/sizes'

const componentWidth = (
  tokenComponentsValue: ICustomTheme['tokens']['sizes']['components'],
  width: WidthType,
  component: NonNullable<InheritStyleComponent>
) => {
  const tokenComponentSizeValue = tokenComponentsValue[component]
  if (!tokenComponentSizeValue) return css``

  const sizeComponent = tokenComponentSizeValue[width]
  if (!sizeComponent) return css``

  const typeOfSize = typeof sizeComponent
  const widthComponent =
    typeOfSize == 'string'
      ? (sizeComponent as string)
      : (sizeComponent as IComponentSize)?.width

  //const isStaticSizeTokenValue = staticsSizesTokens.includes(widthComponent)
  return css`
    width: ${widthComponent};
  `
}

//TODO: Refactoring
export const mixinWidth = (
  themeGlobal: ICustomTheme,
  width: WidthType,
  component: InheritStyleComponent = null
) => {
  if (!themeGlobal) return css``

  const { tokens } = themeGlobal
  const tokenComponentsValue = tokens.sizes.components

  if (component) {
    return componentWidth(tokenComponentsValue, width, component)
  }

  const tokenValue = tokens.sizes.width[width]
  if (!tokenValue) return css``

  //const isStaticSizeTokenValue = staticsSizesTokens.includes(tokenValue)
  return css`
    width: ${tokenValue};
  `
}
