import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import Button from '../Button'
import Icon from '../Icon'
import Title from '../Title'
import { flex } from 'styles/mixins/flex'
import { OnlyTheme } from 'core/domain/types/mixins'

const flexColCenterCSS = flex({
  justifyContent: 'center',
  alignItems: 'center',
  direction: 'column',
})

export const FileWrapperStyled = styled(Container)(
  () => ({
    gap: '2rem',
  }),
  () => flexColCenterCSS
)

type TFileStyled = OnlyTheme
export const FileStyled = styled('div')(({ theme }: TFileStyled) => ({
  position: 'relative',
  width: theme?.tokens.sizes.width.full,
}))

type TFileListStyled = OnlyTheme
export const FileListStyled = styled('ul')(
  ({ theme }: TFileListStyled) => ({
    gap: '1rem',
    width: theme?.tokens.sizes.width.full,
  }),
  () => flexColCenterCSS
)

const flexRowCenterBetweenCSS = flex({
  justifyContent: 'space-between',
  alignItems: 'center',
})

type TFileItemStyled = OnlyTheme
export const FileItemStyled = styled('li')(
  ({ theme }: TFileItemStyled) => ({
    width: theme?.tokens.sizes.width.full,
  }),
  () => flexRowCenterBetweenCSS
)

export const FileDetailsStyled = styled(Container)(
  () => ({
    gap: '1rem',
  }),
  () => flexRowCenterBetweenCSS
)

type TFileTypeStyled = OnlyTheme
export const FileTypeStyled = styled(Container)(
  ({ theme }: TFileTypeStyled) => ({
    textTransform: 'uppercase',
    borderRradius: '1em',
    fontSize: '11px',
    color: theme?.theme.neutral[700],
    backgroundColor: theme?.theme.primary.mediumPurple,
  })
)

const flexEndCSS = flex({ justifyContent: 'flex-end', alignItems: 'center' })
type TFileSizeStyled = OnlyTheme
export const FileSizeStyled = styled(Container)(
  ({ theme }: TFileSizeStyled) => ({
    color: theme?.theme.neutral[300],
    gap: '1rem',
  }),
  () => flexEndCSS
)

type TRemoveFileItemStyled = OnlyTheme
export const RemoveFileItemStyled = styled(Button)(
  ({ theme }: TRemoveFileItemStyled) => ({
    backgroundColor: theme?.theme.neutral[800],
  })
)

export const RemoveStyled = styled(Icon)()

export const InputFileStyled = styled('input')(() => ({
  display: 'none',
}))

export const FilePlusStyled = styled(Button)(() => ({
  position: 'absolute',
  right: '10px',
  top: '-15px',
  zIndex: 2,
}))

export const PlusStyled = styled(Icon)()

type TDragZoneStyled = OnlyTheme
export const DragZoneStyled = styled('div')(({ theme }: TDragZoneStyled) => ({
  border: `4px dashed ${theme?.theme.neutral[600]}`,
  borderRadius: '1em',
  padding: '15px',
  position: 'relative',
}))

export const DragTextStyled = styled(Title)()

type TDragPlaceholderStyled = OnlyTheme
export const DragPlaceholderStyled = styled('div')(
  ({ theme }: TDragPlaceholderStyled) => ({
    width: theme?.tokens.sizes.width.full,
    height: theme?.tokens.sizes.height.full,
    background: theme?.theme.neutral[300],
    position: 'absolute',
    left: '0px',
    top: '0px',
  })
)

export const FilePreview = styled(Container)()

export const FileImage = styled('img')()
