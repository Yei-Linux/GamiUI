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

  &.positionPrefixRight {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 1rem 0 0;
  }

  &.positionPrefixLeft {
    flex-direction: row;
    padding: 0 0 0 1rem;
  }

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

export const Input = styled.input`
  ${mixinInput('light')}
`
