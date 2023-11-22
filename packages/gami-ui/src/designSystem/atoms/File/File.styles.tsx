import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import { lightTheme } from 'styles/tokens/lightTheme'
import Button from '../Button'
import Icon from '../Icon'
import Title from '../Title'

export const FileWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const File = styled.div`
  position: relative;
  width: 100%;
`

export const FileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const FileItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const FileDetails = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`

export const FileType = styled(Container)`
  background-color: ${lightTheme.primary.mediumPurple};
  text-transform: uppercase;
  border-radius: 1em;
  color: ${lightTheme.neutral[700]};
  font-size: 11px;
`

export const FileSize = styled(Container)`
  color: ${lightTheme.neutral[300]};

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

export const RemoveFileItem = styled(Button)`
  background-color: white;
`

export const Remove = styled(Icon)``

export const InputFile = styled.input`
  display: none;
`

export const FilePlus = styled(Button)`
  position: absolute;
  right: 10px;
  top: -15px;
  z-index: 2;
`

export const Plus = styled(Icon)``

export const DragZone = styled.div`
  border: 4px dashed ${lightTheme.neutral[600]};
  border-radius: 1em;
  padding: 15px;

  position: relative;
`

export const DragText = styled(Title)``

export const DragPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f1f197;

  position: absolute;
  left: 0px;
  top: 0px;
`

export const FilePreview = styled(Container)``

export const FileImage = styled.img``
