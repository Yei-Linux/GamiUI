import styled from '@emotion/styled'
import { BorderType, ShadowType, WidthType } from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const CodeBlock = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
}>`
  overflow: hidden;
  ${({ $border, $shadow, $width }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'full',
      width: $width || 'full',
    })};
`
