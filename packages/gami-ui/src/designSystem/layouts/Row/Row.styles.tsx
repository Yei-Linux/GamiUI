import styled from '@emotion/styled'
import { JustifyContentTypes, AlignItemsTypes } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'

export const Row = styled.div<{
  $width?: string
  $height: string
  $justifyContent: JustifyContentTypes
  $alignItems: AlignItemsTypes
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
