import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { TAlignItems, TJustifyContent } from './Row'

export const Row = styled.div<{
  $width?: string
  $height: string
  $justifyContent: TJustifyContent
  $alignItems: TAlignItems
  $flexDirection?: string
}>`
  ${({ $justifyContent, $alignItems }) =>
    mixinFlexVariants({
      justifyContent: $justifyContent,
      alignItems: $alignItems,
    })}

  &.wrap {
    flex-wrap: wrap;
  }

  &.nowrap {
    flex-wrap: nowrap;
  }

  flex-direction: ${({ $flexDirection }) => $flexDirection};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`
