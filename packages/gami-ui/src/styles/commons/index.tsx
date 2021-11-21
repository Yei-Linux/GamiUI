import { css } from '@emotion/react'
import { displays } from './display'
import { flex } from './flex'

import {
  borderRadiusClasses,
  boxShadowClasses,
  fontClasses,
  opacityClasses,
  sizesClasses,
  spacingClasses,
  zIndexClasses,
} from './tokens'

export const allCommonsClasses = () => css`
  ${displays()}
  ${flex()}

  ${fontClasses()}
  ${borderRadiusClasses()}
  ${boxShadowClasses()}
  ${opacityClasses()}
  ${sizesClasses()}
  ${spacingClasses()}
  ${zIndexClasses()}
`
