import styled from '@emotion/styled'
import { ButtonType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Header = styled.div``

export const Content = styled.div`
  max-height: 0px;

  overflow: hidden;
  transition: 0.4s max-height;
`

export const Children = styled.div`
  padding: 1rem;
`

export const Collapse = InheritGlobalStylesComponent(styled.div<{
  $height: string
  $variant?: ButtonType
  $bordered?: boolean
  theme?: ICustomTheme
}>`
  .open {
    max-height: ${({ $height }) => $height};
  }

  ${({ $variant, theme, $bordered }) =>
    mixinComponentsTheme({
      emotionTheme: theme,
      typeStyle: $variant || 'primary',
      element: 'collapse',
      bordered: $bordered,
    })};
`)
