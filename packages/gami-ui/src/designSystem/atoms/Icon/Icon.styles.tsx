import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const Icon = WithDesignStyledComponent(styled.i<{
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

  ${flex({ justifyContent: 'center', alignItems: 'center' })};
`)

export const Svg = styled.svg``
