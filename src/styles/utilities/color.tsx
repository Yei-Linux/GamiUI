import { css } from '@emotion/react'
import { ButtonType } from '../../core/domain/types'
import { colorLight } from '../theme'

export const themeTypes = (
  typeStyle: ButtonType,
  element: 'button' | 'link' = 'button'
) => css`
  background: ${colorLight[element][typeStyle].bg};
  color: ${colorLight[element][typeStyle].color};
  border: ${colorLight[element][typeStyle].border};
`
