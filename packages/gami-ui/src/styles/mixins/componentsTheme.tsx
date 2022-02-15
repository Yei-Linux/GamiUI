import { css } from '@emotion/react'
import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import { ButtonType, FeatureCardThemeTypes } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { validatorProperty } from 'styles/utilities/validatorsCss'

interface IMixinComponentsTheme extends IComponentsVariant {
  emotionTheme: ICustomTheme
  typeStyle: ButtonType | FeatureCardThemeTypes
  element: 'button' | 'link' | 'card' | 'collapse'
}

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

  if (!componentsTheme) return ``

  const { color, bg, border, flatbg } = componentsTheme[element][typeStyle]

  const bgCondition = [bordered, ghost, light].includes(true)
  const colorCondition = [bordered, ghost, light, flat].includes(true)
  const borderCondition = [bordered, ghost].includes(true)

  return css`
    background: ${bgCondition ? 'white' : flat ? flatbg : bg};
    color: ${colorCondition ? bg : color};
    border: ${`1px solid ${borderCondition ? bg : flat ? flatbg : border}`};

    &:hover {
      ${validatorProperty('background', bg, ghost)}
      ${validatorProperty('color', color, ghost)}
      ${validatorProperty('border', `1px solid ${border}`, ghost)}
    }
  `
}
