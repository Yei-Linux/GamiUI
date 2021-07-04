import styled from '@emotion/styled'

export const WaveWrapper = styled.div`
`

export const SvgWave = styled.svg<{
  direction: string
  background: string
}>`
  background: ${(props) => props.background};
  width: 100%;
  height: auto;
  display: block;
`
