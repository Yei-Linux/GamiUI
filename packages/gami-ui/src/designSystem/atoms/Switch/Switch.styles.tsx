import styled from '@emotion/styled'
import {
  RoundedType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { rounded, spacing, defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Switch = styled.button<{
  $border?: RoundedType
  $shadow?: ShadowType
  $width?: WidthType
  $height?: HeightType
}>`
  position: relative;

  min-width: 44px;
  height: 22px;

  margin: ${spacing.margin.none};
  padding: 0px 3px;
  border: ${spacing.border.none};

  transition: all 0.1s;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  &.checked {
    background: ${defaultTheme.light.primary.jordyBlue};
  }

  &.notChecked {
    background: ${defaultTheme.light.neutral[400]};
  }

  ${({ $border, $shadow, $width, $height }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      width: $width,
      height: $height,
    })};
`

export const SwitchBall = styled.div`
  position: absolute;
  top: 8%;

  width: 18px;
  height: 18px;

  border-radius: ${rounded.md};

  background: ${defaultTheme.light.neutral[800]};

  transition: all 0.2s ease-in-out;

  &.checked {
    left: calc(100% - 20px);
  }

  &.notChecked {
    left: 5%;
  }
`
