import styled from '@emotion/styled'
import {
  BorderType,
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { mixinInput } from 'styles/mixins/input'
import { theme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const InputBox = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  overflow: hidden;
  background: ${theme.light.neutral[800]};
  ${mixinFlexVariants({ alignItems: 'center' })}
  max-width: 300px;

  input[type='password'] {
    font-family: system-ui !important;
  }

  &.positionPrefixRight {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &.positionPrefixLeft {
    flex-direction: row;
  }

  padding: 1rem;

  ${({ $border, $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      heigth: $heigth || 'auto',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`

export const Input = styled.input`
  ${mixinInput('light')}
`
