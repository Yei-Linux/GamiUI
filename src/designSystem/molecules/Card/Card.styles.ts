import styled from '@emotion/styled'
import {
  BorderType,
  ShadowType,
  WidthType,
  HeightType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { sizes, spacing, theme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Card = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
}>`
  width: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: min-content;
  min-height: min-content;

  ${({ $border, $shadow, $width, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      heigth: $heigth || 'sm',
    })};
`

export const Cover = styled.div`
  width: ${sizes.width.full};
  margin: 0px;
  border-radius: 0;

  ${mixinFlexVariants({ justifyContent: 'center' })}
`

export const Content = styled.div`
  padding: ${spacing.padding.md};
`

export const Footer = styled.div`
  padding: ${spacing.padding.md};
  margin: 0px;

  width: ${sizes.width.full};
  border: 1px solid ${theme.light.neutral[800]};
`
