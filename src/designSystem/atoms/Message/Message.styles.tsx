import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  FontWeightType,
  HeightType,
  ShadowType,
  TextAlignType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { theme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { TDirection } from './Message'

const messageDirectionLeft = (
  background: string,
  type: 'before' | 'after'
) => css`
  border-top: ${type == 'before' ? '17px' : '15px'} solid ${background};
  top: ${type == 'before' ? '-1px' : '0'};
  left: ${type == 'before' ? '-17px' : '-15px'};
`

const messageDirectionRight = (
  background: string,
  type: 'before' | 'after'
) => css`
  border-bottom: ${type == 'before' ? '17px' : '15px'} solid ${background};
  bottom: ${type == 'before' ? '-1px' : '0'};
  right: ${type == 'before' ? '-17px' : '-15px'};
`

export const Message = styled.div<{
  $direction: TDirection
  $background: string
  $color?: string
  $maxWidth?: string

  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $textAlign?: TextAlignType
  $fontWeight?: FontWeightType
}>`
  position: relative;

  color: ${({ $color }) => $color || theme.light.neutral[800]};
  background-color: ${({ $background }) =>
    $background || theme.light.primary.jordyBlue};
  border: 1px solid
    ${({ $background }) => $background || theme.light.primary.jordyBlue};

  max-width: ${({ $maxWidth }) => $maxWidth};
  min-height: 20px;

  ${mixinFlexVariants({ alignItems: 'center' })}

  &.marker {
    &::after,
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;

      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
    }
  }

  &.directionLeft {
    &::before {
      ${({ $background }) => messageDirectionLeft($background, 'before')};
    }
    &::after {
      ${({ $background }) => messageDirectionLeft($background, 'after')};
    }
  }

  &.directionRight {
    &::before {
      ${({ $background }) => messageDirectionRight($background, 'before')};
    }
    &::after {
      ${({ $background }) => messageDirectionRight($background, 'after')};
    }
  }

  ${({ $shadow, $fontWeight, $width, $textAlign, $heigth }) =>
    setGenericPropStyles({
      border: 'sm',
      shadow: $shadow || 'md',
      width: $width || 'xs',
      heigth: $heigth || 'xs',
      fontWeight: $fontWeight,
      textAlign: $textAlign || 'left',
    })};
`
