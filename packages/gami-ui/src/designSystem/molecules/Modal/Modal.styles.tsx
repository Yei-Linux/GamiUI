import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { OnlyTheme } from 'core/domain/types/mixins'
import { withGlobalStylesUI } from 'core/utils/base'
import { flex } from 'styles/mixins/flex'
import { compose } from 'styles/utilities/tools'

export const ModalStyled = styled('div')(() => ({
  display: 'none',
  '&.visible': {
    display: 'flex',
  },
}))

type TModalDialogStyled = OnlyTheme
export const ModalDialogStyled = styled('div')(
  ({ theme }: TModalDialogStyled) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,

    outline: 0,
    overflow: 'auto',
    zIndex: theme?.tokens.zIndex[5],
  }),
  () => flex({ justifyContent: 'center', alignItems: 'center' })
)

type TModalIconCloseStyledStyled = OnlyTheme
export const ModalIconCloseStyled = styled('div')(
  ({ theme }: TModalIconCloseStyledStyled) => ({
    position: 'absolute',
    right: '10px',
    top: '10px',
    zIndex: theme?.tokens.zIndex[5],
  })
)

const flexBetweenCSS = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
})

const modalLayoutCSS = (theme: OnlyTheme['theme']) =>
  css({
    width: theme?.tokens.sizes.width.full,
    minHeight: '50px',
    padding: theme?.tokens.spacing.padding.md,
  })

type TModalContainerStyled = OnlyTheme & {
  $minHegiht?: string
}
export const ModalContainerStyled = styled('div')(
  ({ $minHegiht, theme }: TModalContainerStyled) => ({
    position: 'relative',
    minWidth: '500px',
    minHeight: $minHegiht,
    height: 'fit-content',
    backgroundColor: theme?.theme.neutral[800],
  }),
  (props) => withGlobalStylesUI(props)()
)

type TModalHeaderStyled = OnlyTheme
export const ModalHeaderStyled = styled('div')(
  ({ theme }: TModalHeaderStyled) => ({
    borderBottom: `1px solid ${theme?.theme.neutral[500]}`,
  }),
  ({ theme }) => compose([modalLayoutCSS(theme), flexBetweenCSS])
)

type TModalFooterStyled = OnlyTheme
export const ModalFooterStyled = styled('div')(
  ({ theme }: TModalFooterStyled) => ({
    borderTop: `1px solid ${theme?.theme.neutral[500]}`,
  }),
  ({ theme }) => compose([modalLayoutCSS(theme), flexBetweenCSS])
)

type TModalBodyStyled = OnlyTheme
export const ModalBody = styled('div')(({ theme }: TModalBodyStyled) => ({
  width: theme?.tokens.sizes.width.full,
  minHeight: '50px',
  padding: theme?.tokens.spacing.padding.md,
}))
