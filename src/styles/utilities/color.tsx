import { css } from '@emotion/react'
import { ButtonType, FeatureCardThemeTypes } from '../../core/domain/types'
import { colorLight } from '../theme'

export const themeTypes = (
  typeStyle: ButtonType | FeatureCardThemeTypes,
  element: 'button' | 'link' | 'card' = 'button'
) => css`
  background: ${colorLight[element][typeStyle].bg};
  color: ${colorLight[element][typeStyle].color};
  border: ${colorLight[element][typeStyle].border};
`
