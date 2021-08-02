import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const WaveWrapper = styled.div<{ isWaveLikeBackground: boolean }>`
  position: ${(props) => (props.isWaveLikeBackground ? 'relative' : 'static')};
`

export const SvgWave = styled.svg<{
  direction: string
  background: string
  isWaveLikeBackground: boolean
}>`
  background: ${(props) => props.background};
  position: ${(props) => (props.isWaveLikeBackground ? 'absolute' : 'static')};
  width: 100%;
  height: auto;
  display: block;

  ${(props) =>
    props.isWaveLikeBackground &&
    css`
      top: 0px;
      left: 0px;
      z-index: -1;
    `}
`
