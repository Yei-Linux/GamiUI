import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { ButtonType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { spacing } from 'styles/tokens/spacing'
import { GlobalStylesComponent } from 'styles/utilities/commonComponent'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const Button = styled(GlobalStylesComponent('button'))<{
  $variant?: ButtonType,
  theme?: ICustomTheme
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

  border: none;
  outline: none;
  appearance: none;

  padding: ${spacing.padding.sm} ${spacing.padding.md};

  &:hover {
    cursor: pointer;
  }

  ${({ $variant, theme }) =>
    mixinComponentsTheme(theme, $variant || 'primary', 'button')};
`
