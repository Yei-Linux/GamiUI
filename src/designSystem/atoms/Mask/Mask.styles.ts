import styled from '@emotion/styled'

export const MaskWrapper = styled.div<{ zIndex?: number; background?: string }>`
  background-color: ${(props) => props.background};
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: ${(props) => props.zIndex};
  height: 100%;
  position: fixed;
`
