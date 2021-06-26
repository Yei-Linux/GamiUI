import styled from '@emotion/styled'

export const MaskWrapper = styled.div<{zIndex?: number}>`
  background-color: rgba(0, 0, 0, 0.45);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${props => props.zIndex};
  height: 100%;
  position: fixed;
`
