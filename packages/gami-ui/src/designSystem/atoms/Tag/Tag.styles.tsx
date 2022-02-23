import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { rounded, spacing, defaultTheme } from 'styles/tokens'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Tag = InheritGlobalStylesComponent(styled.div<{
  $background?: string
  $color?: string
}>`
  padding: 10px 1rem;
  width: fit-content;

  &:hover {
    cursor: pointer;
  }

  background: ${({ $background }) =>
    $background || defaultTheme.light.neutral[800]};
  color: ${({ $color }) => $color || defaultTheme.light.primary.jordyBlue};

  ${mixinFlexVariants({ alignItems: 'center' })}
`)

export const BallMarker = styled.span<{ $background?: string }>`
  display: block;

  width: 10px;
  height: 10px;

  border-radius: ${rounded.lg};
  margin-right: ${spacing.margin.sm};

  background: ${({ $background }) => $background};
`
