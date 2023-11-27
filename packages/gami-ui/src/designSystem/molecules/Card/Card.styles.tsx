import styled from '@emotion/styled'

import { OnlyTheme, PartialBy } from 'core/domain/types/mixins'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { flex } from 'styles/mixins/flex'

const flexColumCSS = flex({
  direction: 'column',
})

type TCardStyled = PartialBy<TWithGlobalStylesUI, 'theme'>
export const CardStyled = styled('div')(
  (prop: TCardStyled) => ({
    overflow: 'hidden',
    minHeight: 'min-content',
    backgroundColor: prop.theme?.theme.neutral[800],
  }),
  () => flexColumCSS,
  (props) => withGlobalStylesUI(props)()
)

const flexCenterCSS = flex({ justifyContent: 'center' })
type TCoverStyled = OnlyTheme
export const CoverStyled = styled('div')(
  ({ theme }: TCoverStyled) => ({
    width: theme?.tokens.sizes.width.full,
    margin: '0px',
    borderRadius: 0,
  }),
  () => flexCenterCSS
)

export type TContentStyled = OnlyTheme
export const ContentStyled = styled('div')(({ theme }: TContentStyled) => ({
  padding: theme?.tokens.spacing.padding.md,
}))

type TFooterStyled = OnlyTheme
export const FooterStyled = styled('div')(({ theme }: TFooterStyled) => ({
  padding: theme?.tokens.spacing.padding.md,
  margin: '0px',
  width: theme?.tokens.sizes.width.full,
  border: `1px solid ${theme?.theme.neutral[800]}`,
}))
