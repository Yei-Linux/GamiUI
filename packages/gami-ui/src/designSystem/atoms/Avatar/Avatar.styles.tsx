import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Row from 'designSystem/layouts/Row'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { compose } from 'styles/utilities/tools'
import { PartialBy } from 'core/domain/types/mixins'

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

export const CountStyled = styled(Row)({
  width: '30px',
  height: '100%',
  marginLeft: '0.4rem',
  fontWeight: 'bold',
})

export type TAvatarStyles = {
  $borderColor?: string
  $textColor?: string
  $background: string
} & PartialBy<TWithGlobalStylesUI, 'theme'>
export const AvatarStyled = styled('div')(
  ({
    $background,
    $textColor,
    $borderColor,
    ...globalStyles
  }: TAvatarStyles) => ({
    background: $background,
    color: $textColor && $textColor,
    borderColor: $borderColor && `1px solid ${$borderColor}`,
    width: globalStyles.theme?.tokens.sizes.components.avatar.md,
    height: globalStyles.theme?.tokens.sizes.components.avatar.md,
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  (props) => withGlobalStylesUI(props)('avatar'),
  () => compose([zoomModeCSS, flexCSS])
)

export const AvatarGroupStyled = styled(Row)`
  ${AvatarStyled} {
    margin-left: -5px;
  }
`
