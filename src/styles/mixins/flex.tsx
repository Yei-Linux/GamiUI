import { css } from '@emotion/react'

type TJustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type TAlignItems = 'center' | 'flex-start' | 'flex-end'

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
