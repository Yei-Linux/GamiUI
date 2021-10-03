import styled from '@emotion/styled'
import { sizes } from 'styles/tokens'

export const Wave = styled.div`
  &.waveLikeBackground {
    position: relative;
  }

  &.notWaveLikeBackground {
    position: static;
  }
`

export const SvgWave = styled.svg<{
  $background: string
}>`
  width: ${sizes.width.full};
  height: ${sizes.height.auto};
  display: block;

  background: ${({$background}) => $background};

  &.waveLikeBackground {
    top: 0px;
    left: 0px;
    z-index: -1;
  }
`
