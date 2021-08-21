import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'
import {
  BorderType,
  ButtonType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { themeTypes } from 'styles/utilities/color'
import { spacing } from 'styles/tokens/spacing'

export const Button = styled.button<{
  $variant?: ButtonType
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

  border: none;
  outline: none;
  appearance: none;

  &:hover {
    cursor: pointer;
  }

  padding: ${spacing.padding.md};

  ${({ $variant }) => themeTypes($variant || 'primary', 'button')};

  ${({ $border, $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'MEDIUM',
      shadow: $shadow || 'MEDIUM',
      width: $width || 'SMALL',
      heigth: $heigth || 'SMALL',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`
