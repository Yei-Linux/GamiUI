import styled from '@emotion/styled'
import {
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Title = styled.div<{
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  ${({ $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      shadow: $shadow || 'md',
      width: $width || 'xs',
      heigth: $heigth || 'xs',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`
