import { css } from '@emotion/react'
import { AlignItemsTypes, JustifyContentTypes } from 'core/domain/types'

interface IMixinFlexVariant {
  justifyContent?: JustifyContentTypes | null
  alignItems?: AlignItemsTypes | null
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
