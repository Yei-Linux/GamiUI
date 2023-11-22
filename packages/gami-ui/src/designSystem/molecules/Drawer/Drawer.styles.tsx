import styled from '@emotion/styled'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const CloseIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
`

export const Drawer = WithDesignStyledComponent(styled.div<{
  $zIndex: number
  $width: number
  $height: number
}>`
  background: #fff;
  box-shadow: 0 -2px 8px rgb(0 0 0 / 15%);

  overflow-y: auto;
  position: fixed;

  z-index: ${({ $zIndex }) => $zIndex};

  &.left {
    top: 0px;
    bottom: 0px;
    left: ${({ $width }) => `-${$width}px`};
    width: ${({ $width }) => `${$width}px`};
    border-top-right-radius: 2em;
  }
  &.right {
    top: 0px;
    bottom: 0px;
    right: ${({ $width }) => `-${$width}px`};
    width: ${({ $width }) => `${$width}px`};
    border-top-left-radius: 2em;
  }
  &.top {
    top: ${({ $height }) => `-${$height}px`};
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    height: ${({ $height }) => `${$height}px`};
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em;
  }
  &.bottom {
    top: auto;
    bottom: ${({ $height }) => `-${$height}px`};
    left: 0;
    right: 0;
    width: 100%;
    height: ${({ $height }) => `${$height}px`};
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
  }
`)
