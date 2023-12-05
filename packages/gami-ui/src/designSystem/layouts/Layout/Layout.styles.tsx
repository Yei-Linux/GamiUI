import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'

const areaCSS = (area: string) => css`
  grid-area: ${area};
`

type THeaderStyled = OnlyTheme
export const HeaderStyled = styled('header')(
  ({ theme }: THeaderStyled) => ({
    '&.sticky': {
      position: 'sticky',
      top: 0,
      zIndex: theme?.tokens.zIndex[1],
    },
  }),
  () => areaCSS('header')
)

export const ContentStyled = styled('main')(() => areaCSS('main'))

export const SidebarStyled = styled('div')(() => areaCSS('sidebar'))

export const FooterStyled = styled('footer')(() => areaCSS('footer'))

type TLayoutStyled = {
  $hasSidebar: boolean
  $width: string
  $height: string
  $minHeight: string
  $gridTemplate: string
}
export const LayoutStyled = styled('div')(
  ({ $gridTemplate, $height, $minHeight, $width }: TLayoutStyled) => ({
    width: $width,
    height: $height,
    minHeight: $minHeight,
    display: 'grid',
    gridTemplate: $gridTemplate,
  })
)
