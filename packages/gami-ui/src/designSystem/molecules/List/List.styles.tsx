import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { flex } from 'styles/mixins/flex'
import { spacing, defaultTheme } from 'styles/tokens'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const List = WithDesignStyledComponent(styled.ul`
  width: fit-content;
`)

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
  ${flex({
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
  margin-right: ${spacing.margin.md};
`
