import { css } from '@emotion/react'
import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import { ComponentThemeType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { validProp } from 'styles/utilities/validatorsCss'

interface IMixinComponentsTheme extends IComponentsVariant {
  emotionTheme: ICustomTheme
  typeStyle: ComponentThemeType
  element: 'button' | 'link' | 'card' | 'collapse'
}

//TODO: Implement contrast detector dynamically
export const mixinComponentsTheme = ({
  emotionTheme,
  typeStyle,
  element,
  bordered = false,
  ghost = false,
  light = false,
  flat = false,
}: IMixinComponentsTheme) => {
  const { componentsTheme } = emotionTheme
  if (!componentsTheme) return css``

  const { color, bg, border, flatbg } = componentsTheme[element][typeStyle]

  const bgCondition = [bordered, ghost, light].includes(true)
  const colorCondition = [bordered, ghost, light, flat].includes(true)
  const borderCondition = [bordered, ghost].includes(true)

  const contrastColors = ['white', '#FFFFFF'].includes(bg) ? '#000000' : bg

  const backgroundValueCSS = bgCondition ? 'white' : flat ? flatbg : bg
  const colorValueCSS = colorCondition ? contrastColors : color
  const borderValueCSS = `${border} solid ${
    borderCondition ? contrastColors : flat ? flatbg : bg
  }`

  return css`
    background: ${backgroundValueCSS};
    color: ${colorValueCSS};
    border: ${borderValueCSS};

    &:hover {
      ${validProp('background', bg, ghost)}
      ${validProp('color', color, ghost)}
      ${validProp('border', `${border} solid ${bg}`, ghost)}
    }
  `
}
