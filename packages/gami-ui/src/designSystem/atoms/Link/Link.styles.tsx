import styled from '@emotion/styled'
import { ComponentThemeType } from 'core/domain/types'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { compose } from 'styles/utilities/tools'
import { hover } from 'styles/mixins/transition'
import { OnlyTheme } from 'core/domain/types/mixins'
import { withGlobalStylesUI } from 'core/utils/base'

type TLinkStyled = {
  $variant?: ComponentThemeType
  $bordered?: boolean
  $ghost?: boolean
  $flat?: boolean
  $light?: boolean
} & OnlyTheme
export const LinkStyled = styled('a')(
  () => ({
    textDecoration: 'none',
    display: 'inline-block',
  }),
  ({ theme, $variant, $bordered, $ghost, $light, $flat }: TLinkStyled) =>
    compose([
      hover,
      mixinComponentsTheme({
        emotionTheme: theme,
        typeStyle: $variant || 'primary',
        element: 'link',
        bordered: $bordered,
        ghost: $ghost,
        light: $light,
        flat: $flat,
      }),
    ]),
  (props) => withGlobalStylesUI(props)('text')
)
