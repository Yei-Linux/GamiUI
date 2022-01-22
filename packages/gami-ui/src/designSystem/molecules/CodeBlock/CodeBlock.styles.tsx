import styled from '@emotion/styled'
import { BorderType, ShadowType, WidthType } from 'core/domain/types'
import { font } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const CodeBlock = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
}>`
  code {
    color: white;
    font-weight: bold;
    font-size: 15px;
    font-family: ${font.family.mali};

    .token.function-variable {
      color: rgb(97, 175, 239) !important;
    }
    .token.operator {
      color: rgb(171, 178, 191) !important;
    }
    .token.punctuation {
      color: rgb(171, 178, 191) !important;
    }
  }

  overflow: hidden;
  ${({ $border, $shadow, $width }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'full',
      width: $width || 'full',
    })};
`
