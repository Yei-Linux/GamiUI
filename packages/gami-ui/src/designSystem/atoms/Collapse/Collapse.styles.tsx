import styled from '@emotion/styled'
import { ComponentThemeType } from 'core/domain/types'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'

export const Header = styled('div')()

export const Content = styled('div')({
  maxHeight: '0px',
  overflow: 'hidden',
  transition: '0.4s max-height',
})

export const Children = styled('div')({
  padding: '1rem',
})

export type TCollapseStyled = PartialBy<TWithGlobalStylesUI, 'theme'> & {
  $customHeight: string
  $variant?: ComponentThemeType
  $bordered?: boolean
  $divider?: boolean
}
export const CollapseStyled = styled('div')(
  ({ $customHeight }: TCollapseStyled) => ({
    '.open': {
      maxHeight: $customHeight,
    },
    '&.divider': {
      borderTop: 'none',
      borderBottom: '1px solid #eaeaea',
    },
  }),
  ({ $variant, theme, $bordered }) =>
    mixinComponentsTheme({
      emotionTheme: theme,
      typeStyle: $variant || 'primary',
      element: 'collapse',
      bordered: $bordered,
    }),
  (props) => withGlobalStylesUI(props)()
)
