import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { GlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Icon = styled(GlobalStylesComponent('i'))<{
  theme?: ICustomTheme
}>`
  outline: none;
  appearance: none;
  border: ${({ theme }) => theme.tokens.spacing.border.none};

  &.hoverIcon {
    &:hover {
      cursor: pointer;
    }
  }

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};
`

export const Svg = styled.svg``
