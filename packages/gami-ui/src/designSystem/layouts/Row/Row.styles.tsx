import styled from '@emotion/styled'
import { JustifyContentTypes, AlignItemsTypes } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { validatorProperty } from 'styles/utilities/validatorsCss'

export const Row = styled.div<{
  $gap?: string | null
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

  ${({ $gap }) => validatorProperty('gap', $gap)}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`
