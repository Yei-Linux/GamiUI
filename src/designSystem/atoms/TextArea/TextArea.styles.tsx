import styled from '@emotion/styled'
import {
  BorderType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinInput } from 'styles/mixins/input'
import { spacing } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const TextArea = styled.textarea<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  height: 69px;
  min-height: 75px;
  max-height: 225px;

  margin: ${spacing.margin.none};
  padding-top: ${spacing.padding.md};

  ${mixinInput('light')};

  ${({ $border, $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      heigth: $heigth || 'sm',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`
