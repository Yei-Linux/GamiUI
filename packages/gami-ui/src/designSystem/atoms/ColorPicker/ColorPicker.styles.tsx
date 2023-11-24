import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import { Panel } from 'styles/utilities/commonComponent'
import Title from '../Title'
import { flex } from 'styles/mixins/flex'
import { OnlyTheme } from 'core/domain/types/mixins'

export const WrapperStyled = styled('div')()

export const ColorPickerPanelstyled = styled(Panel)({
  position: 'fixed',
  zIndex: 3,
  '&.hide': {
    visibility: 'hidden',
  },
})

type TColorPickerStyled = OnlyTheme
const flexCenterCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'column',
})
export const ColorPickerStyled = styled('div')(
  ({ theme }: TColorPickerStyled) => ({
    width: theme?.tokens.sizes.width.full,
    height: theme?.tokens.sizes.height.full,
    gap: '1rem',
  }),
  () => flexCenterCSS
)

type TCavasStyled = OnlyTheme
export const CanvasStyled = styled('canvas')(({ theme }: TCavasStyled) => ({
  border: `1px solid ${theme?.theme.neutral[600]}`,
}))

type TCavasPickerStyled = OnlyTheme
export const CanvasPickerStyled = styled('canvas')(
  ({ theme }: TCavasPickerStyled) => ({
    border: `1px solid ${theme?.theme.neutral[600]}`,
    position: 'absolute',
    left: '0px',
    top: '0px',
  })
)

const flexCenterInfoCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
})
export const InfoStyled = styled('div')(
  () => ({
    gap: '1rem',
  }),
  () => flexCenterInfoCSS
)

export const SelectedTitleStyled = styled(Title)(() => ({
  minWidth: '130px',
  textAign: 'center',
}))

export const SelectedViewerStyled = styled('div')(() => ({
  width: '30px',
  height: '30px',
  borderRadius: '100%',
  border: '2px solid rgba(15, 15, 15, 0.2)',
}))

export const TitlePickerStyled = styled(Title)()

export const CanvasContainerStyled = styled(Container)(() => ({
  position: 'relative',
}))

type TInputContainerStyled = OnlyTheme
export const InputContainerStyled = styled('div')(
  ({ theme }: TInputContainerStyled) => ({
    width: theme?.tokens.sizes.width.fit,
  })
)
