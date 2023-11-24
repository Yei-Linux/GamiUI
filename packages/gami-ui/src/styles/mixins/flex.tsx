import { css } from '@emotion/react'
import {
  AlignItemsTypes,
  DirectionTypes,
  JustifyContentTypes,
} from 'core/domain/types'

interface IMixinFlexVariant {
  justifyContent?: JustifyContentTypes | null
  alignItems?: AlignItemsTypes | null
  direction?: DirectionTypes | null
}

export const flex = ({
  justifyContent = null,
  alignItems = null,
  direction = null,
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

  ${direction &&
  css`
    flex-direction: ${direction};
  `}
`
