import styled from '@emotion/styled'
import { ComponentThemeType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Link = InheritGlobalStylesComponent(
  styled.a<{
    theme: ICustomTheme
    $variant?: ComponentThemeType
    $bordered?: boolean
    $ghost?: boolean
    $flat?: boolean
    $light?: boolean
  }>`
    text-decoration: none;
    display: inline-block;

    &:hover {
      cursor: pointer;
    }

    ${({ $variant, theme, $bordered, $ghost, $light, $flat }) =>
      mixinComponentsTheme({
        emotionTheme: theme,
        typeStyle: $variant || 'primary',
        element: 'link',
        bordered: $bordered,
        ghost: $ghost,
        light: $light,
        flat: $flat,
      })};
  `,
  'text'
)
