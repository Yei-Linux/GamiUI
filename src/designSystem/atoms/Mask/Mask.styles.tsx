import styled from '@emotion/styled'
import { sizes } from 'styles/tokens'
import { TZIndex } from './Mask'

export const Mask= styled.div<{
  $zIndex: TZIndex
  $background: string
}>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;

  height: ${sizes.height.full};

  background-color: ${({ $background }) => $background};
  z-index: ${({ $zIndex }) => $zIndex};
`
