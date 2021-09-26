import styled from '@emotion/styled'
import { BorderType, FontWeightType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { borderRadius, spacing, theme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Tag = styled.div<{
  $background?: string
  $color?: string
  $border?: BorderType
  $shadow?: ShadowType
  $fontWeight?: FontWeightType
}>`
  padding: 10px 1rem;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  background: ${({ $background }) => $background || theme.light.neutral[600]};
  color: ${({ $color }) => $color || theme.light.neutral[400]};

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

  border-radius: ${borderRadius.lg};
  margin-right: ${spacing.margin.sm};

  background: ${({ $background }) => $background};
`
