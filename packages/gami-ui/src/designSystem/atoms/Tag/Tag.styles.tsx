import styled from '@emotion/styled'
import { flex } from 'styles/mixins/flex'
import { rounded, spacing, defaultTheme } from 'styles/tokens'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const Tag = WithDesignStyledComponent(styled.div<{
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

  ${flex({ alignItems: 'center' })}
`)

export const BallMarker = styled.span<{ $background?: string }>`
  display: block;

  width: 10px;
  height: 10px;

  border-radius: ${rounded.lg};
  margin-right: ${spacing.margin.sm};

  background: ${({ $background }) => $background};
`

export const TagGroup = styled.div<{ $gap: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: min-content;
  gap: ${({ $gap }) => $gap};
`

export const TagSize = styled.span`
  color: ${defaultTheme.light.neutral[300]};
`
