import styled from '@emotion/styled'

export const WaveWrapper = styled.div`
  width: min-content;
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
