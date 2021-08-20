import { css } from '@emotion/react'

type TJustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
type TAlignItems = 'center' | 'flex-start' | 'flex-end'

interface IMixinFlexVariant {
  justifyContent: TJustifyContent
  alignItems: TAlignItems
}

export const mixinFlexVariants = ({
  justifyContent,
  alignItems,
}: IMixinFlexVariant) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`
