import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { spacing, defaultTheme } from 'styles/tokens'

export const Controls = styled.div<{ $maxWidth?: string }>`
  padding: ${spacing.padding.md};
  width: fit-content;
  max-width: ${({ $maxWidth }) => $maxWidth};
`

export const ControlsTitle = styled.div``

export const ControlsItemGroup = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  flex-wrap: wrap;
  padding: ${spacing.padding.md};
`

export const ControlsItem = styled.div`
  text-align: center;
  background-color: ${defaultTheme.light.primary.hawkesBlue};
  border-radius: 15em;

  padding: 5px;
  margin: 3px;

  width: fit-content;
  min-width: 30px;

  &:hover {
    cursor: pointer;
  }
`
