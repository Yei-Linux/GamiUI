import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { ComponentThemeType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const Button = InheritGlobalStylesComponent(
  styled.button<{
    $variant?: ComponentThemeType
    $bordered?: boolean
    $ghost?: boolean
    $flat?: boolean
    $light?: boolean
    theme?: ICustomTheme
  }>`
    border: none;
    outline: none;
    appearance: none;

    &.disabled {
      cursor: not-allowed;
      pointer-events: auto;
    }

    &.enabled {
      &:hover {
        cursor: pointer;
      }
    }

    ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

    padding: ${({ theme }) =>
      `${theme.tokens.spacing.padding.sm} ${theme.tokens.spacing.padding.md}`};

    ${({ $variant, theme, $bordered, $ghost, $light, $flat }) =>
      mixinComponentsTheme({
        emotionTheme: theme,
        typeStyle: $variant || 'primary',
        element: 'button',
        bordered: $bordered,
        ghost: $ghost,
        light: $light,
        flat: $flat,
      })};
  `,
  'button'
)
