import styled from '@emotion/styled'
import { flex } from 'styles/mixins/flex'
import { ComponentThemeType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { compose } from 'styles/utilities/tools'

const flexCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
})

export type TButtonStyled = {
  $variant?: ComponentThemeType
  $bordered?: boolean
  $ghost?: boolean
  $flat?: boolean
  $light?: boolean
} & PartialBy<TWithGlobalStylesUI, 'theme'>
export const ButtonStyled = styled('button')(
  (props: TButtonStyled) => ({
    padding: `${props?.theme?.tokens.spacing.padding.sm} ${props?.theme?.tokens.spacing.padding.md}`,
    border: 'none',
    outline: 'none',
    appearance: 'none',
    '&.disabled': {
      cursor: 'not-allowed',
      pointerEvents: 'auto',
    },
    '&.enabled': {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }),
  ({ $variant, theme, $bordered, $ghost, $light, $flat }) =>
    compose([
      flexCSS,
      mixinComponentsTheme({
        emotionTheme: theme,
        typeStyle: $variant || 'primary',
        element: 'button',
        bordered: $bordered,
        ghost: $ghost,
        light: $light,
        flat: $flat,
      }),
    ]),
  (props) => withGlobalStylesUI(props)('button')
)
