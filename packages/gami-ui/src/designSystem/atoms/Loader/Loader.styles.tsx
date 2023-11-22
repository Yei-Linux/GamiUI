import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

export const Loader = styled.div<{ $styles: SerializedStyles }>`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  .loader__item {
    ${({ $styles }) => $styles}
  }
`

export const Item = styled.div``

export const Wrapper = styled.div<{ $minHeight?: string }>`
  width: 100%;
  height: 100%;
  min-height: ${({ $minHeight }) => $minHeight};

  position: relative;

  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &.absolute {
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .loader {
    left: 45%;
  }
`

export const FragmentLoader = styled.div<{ $minHeight?: string }>`
  width: 100%;
  height: 100%;
  position: relative;
  min-height: ${({ $minHeight }) => $minHeight};
`
