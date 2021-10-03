import { css } from '@emotion/react'
import { TJustifyContent, TAlignItems } from 'designSystem/layouts/Row/Row'

interface IMixinFlexVariant {
  justifyContent?: TJustifyContent | null
  alignItems?: TAlignItems | null
}

export const mixinFlexVariants = ({
  justifyContent = null,
  alignItems = null,
}: IMixinFlexVariant) => css`
  display: flex;

  ${justifyContent &&
  css`
    justify-content: ${justifyContent};
  `}

  ${alignItems &&
  css`
    align-items: ${alignItems};
  `}
`
