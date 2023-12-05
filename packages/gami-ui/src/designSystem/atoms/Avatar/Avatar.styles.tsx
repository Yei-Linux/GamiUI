import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import Row from 'designSystem/layouts/Row'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { flex } from 'styles/mixins/flex'
import { hover } from 'styles/mixins/transition'
import { compose } from 'styles/utilities/tools'

export const zoomModeCSS = css({
  '&.zoom__outside,&.zoom__inside': {
    transition: 'transform 0.2s',
  },
  '&.zoom__outside:hover': {
    transform: 'scale(1.2)',
  },
  '&.zoom__inside:hover': {
    transform: 'scale(0.8)',
  },
})

export const flexCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
})

const BaseAvatarCSS = (theme: ICustomTheme | undefined) =>
  compose([
    css({
      width: theme?.tokens.sizes.components.avatar.md,
      height: theme?.tokens.sizes.components.avatar.md,
    }),
    hover,
  ])

type TCountedStyled = {
  $background?: string
} & PartialBy<Pick<TWithGlobalStylesUI, 'theme'>, 'theme'>
export const CountStyled = styled(Row)(
  ({ $background, theme }: TCountedStyled) => ({
    fontWeight: theme?.tokens.font.weight.bold,
    borderRadius: theme?.tokens.sizes.components.avatar.full,
    background: $background ?? theme?.theme.neutral[500],
  }),
  (props) => compose([BaseAvatarCSS(props.theme)])
)

export type TAvatarStyles = {
  $borderColor?: string
  $textColor?: string
  $background?: string
} & PartialBy<TWithGlobalStylesUI, 'theme'>
export const AvatarStyled = styled('div')(
  ({ $background, $textColor, $borderColor }: TAvatarStyles) => ({
    overflow: 'hidden',
    borderColor: $borderColor && `1px solid ${$borderColor}`,
    color: $textColor,
    background: $background,
  }),
  (props) => compose([zoomModeCSS, flexCSS, BaseAvatarCSS(props.theme)]),
  (props) => withGlobalStylesUI(props)('avatar')
)

export const AvatarGroupStyled = styled(Row)`
  ${AvatarStyled}, ${CountStyled} {
    margin-left: -5px;
  }
`
