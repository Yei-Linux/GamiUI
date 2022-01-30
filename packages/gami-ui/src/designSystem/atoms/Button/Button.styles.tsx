import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { ButtonType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { GlobalStylesComponent } from 'styles/utilities/commonComponent'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const Button = styled(GlobalStylesComponent('button'))<{
  $variant?: ButtonType
  theme?: ICustomTheme
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

  border: none;
  outline: none;
  appearance: none;

  padding: ${({ theme }) =>
    `${theme.tokens.spacing.padding.sm} ${theme.tokens.spacing.padding.md}`};

  &:hover {
    cursor: pointer;
  }

  ${({ $variant, theme }) =>
    mixinComponentsTheme(theme, $variant || 'primary', 'button')};
`
