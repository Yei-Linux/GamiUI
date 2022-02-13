import styled from '@emotion/styled'
import { RoundedType, FontWeightType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { rounded, spacing, defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Tag = styled.div<{
  $background?: string
  $color?: string
  $border?: RoundedType
  $shadow?: ShadowType
  $fontWeight?: FontWeightType
}>`
  padding: 10px 1rem;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  background: ${({ $background }) => $background || defaultTheme.light.neutral[600]};
  color: ${({ $color }) => $color || defaultTheme.light.neutral[400]};

  ${mixinFlexVariants({ alignItems: 'center' })}

  ${({ $border, $shadow, $fontWeight }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      fontWeight: $fontWeight,
    })};
`
export const BallMarker = styled.span<{ $background?: string }>`
  display: block;

  width: 10px;
  height: 10px;

  border-radius: ${rounded.lg};
  margin-right: ${spacing.margin.sm};

  background: ${({ $background }) => $background};
`
