import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Row from 'designSystem/layouts/Row'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { compose } from 'styles/utilities/tools'
import { PartialBy } from 'core/domain/types/mixins'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

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

export const flexCSS = mixinFlexVariants({
  justifyContent: 'center',
  alignItems: 'center',
})

const BaseAvatarCSS = (theme: ICustomTheme | undefined) =>
  css({
    width: theme?.tokens.sizes.components.avatar.md,
    height: theme?.tokens.sizes.components.avatar.md,
    '&:hover': {
      cursor: 'pointer',
    },
  })

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
