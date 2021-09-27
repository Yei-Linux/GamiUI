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
import { mixinComponentsTypes } from 'styles/mixins/componentsTypes'
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

  padding: ${spacing.padding.sm} ${spacing.padding.md};

  &:hover {
    cursor: pointer;
  }

  ${({ $variant }) =>
    mixinComponentsTypes('light', $variant || 'primary', 'button')};

  ${({ $border, $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'md',
      width: $width || 'auto',
      heigth: $heigth || 'auto',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`
