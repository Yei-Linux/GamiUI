import styled from '@emotion/styled'
import {
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const RichText = styled.div<{
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  ${({ $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      shadow: $shadow || 'none',
      width: $width || 'auto',
      heigth: $heigth || 'auto',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`
