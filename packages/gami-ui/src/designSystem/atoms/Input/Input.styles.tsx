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
import { defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const InputBox = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $height?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  overflow: hidden;
  background: ${defaultTheme.light.neutral[800]};
  ${mixinFlexVariants({ alignItems: 'center' })}
  max-width: 300px;

  input[type='password'] {
    font-family: system-ui !important;
  }

  &.positionPrefixRight {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 1rem 0 0;
  }

  &.positionPrefixLeft {
    flex-direction: row;
    padding: 0 0 0 1rem;
  }

  ${({ $border, $shadow, $fontWeight, $width, $textAlign, $height }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      height: $height || 'auto',
      fontWeight: $fontWeight,
      textAlign: $textAlign,
    })};
`

export const Input = styled.input`
  ${mixinInput('light')}
`
