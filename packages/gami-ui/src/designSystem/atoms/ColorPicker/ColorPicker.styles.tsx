import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import { lightTheme } from 'styles/tokens/lightTheme'
import { Panel } from 'styles/utilities/commonComponent'
import Title from '../Title'

export const Wrapper = styled.div``

export const ColorPickerPanel = styled(Panel)`
  position: fixed;
  z-index: 3;

  &.hide {
    visibility: hidden;
  }
`

export const ColorPicker = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Canvas = styled.canvas`
  border: 1px solid ${lightTheme.neutral[600]};
`

export const CanvasPicker = styled.canvas`
  border: 1px solid ${lightTheme.neutral[600]};
  position: absolute;
  left: 0px;
  top: 0px;
`

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const SelectedTitle = styled(Title)`
  min-width: 130px;
  text-align: center;
`

export const SelectedViewer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px solid rgba(15, 15, 15, 0.2);
`

export const TitlePicker = styled(Title)``

export const CanvasContainer = styled(Container)`
  position: relative;
`
