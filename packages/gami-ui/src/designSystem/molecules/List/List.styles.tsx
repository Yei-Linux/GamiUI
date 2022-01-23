import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BorderType,
  ShadowType,
  WidthType,
  HeightType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { spacing, defaultTheme } from 'styles/tokens'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const List = styled.ul<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
}>`
  width: fit-content;

  ${({ $border, $shadow, $width, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'sm',
      width: $width || 'fit',
      heigth: $heigth || 'auto',
    })};
`

const selectedItemStyle = () => css`
  background-color: ${defaultTheme.light.primary.jordyBlue};

  div {
    color: ${defaultTheme.light.neutral[800]};
  }
  svg {
    fill: ${defaultTheme.light.neutral[800]};
  }
`

export const ListItem = styled.li`
  ${mixinFlexVariants({
    justifyContent: 'space-between',
    alignItems: 'center',
  })}

  padding: ${spacing.padding.md};

  width: 100%;
  min-width: 250px;

  list-style: none;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    border: 1px solid ${defaultTheme.light.neutral[500]};
    border-radius: 0.4em;
    ${selectedItemStyle()}
  }

  &.allborder {
    border: 1px solid ${defaultTheme.light.neutral[500]};
    border-radius: 0.4em;
    &:hover {
      ${selectedItemStyle()}
    }
  }

  &.halfborder {
    border-bottom: 1px solid ${defaultTheme.light.neutral[500]};
  }

  &.noborder {
    border: none;
  }
`
export const ListItemChild = styled.div`
  margin-right: ${spacing.margin.md}; ;
`
