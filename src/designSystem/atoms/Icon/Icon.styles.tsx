import styled from '@emotion/styled'
import { BorderType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { spacing } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Icon = styled.i<{
  $border?: BorderType
  $shadow?: ShadowType
}>`
  outline: none;
  appearance: none;
  border: ${spacing.border.none};

  &.hoverIcon {
    &:hover {
      cursor: pointer;
    }
  }

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  ${({ $border, $shadow }) =>
    setGenericPropStyles({
      border: $border || 'none',
      shadow: $shadow || 'none',
    })};
`

export const Svg = styled.svg``
