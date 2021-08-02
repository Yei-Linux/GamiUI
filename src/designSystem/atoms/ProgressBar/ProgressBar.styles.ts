import styled from '@emotion/styled'

export const ProgressBarWrapper = styled.div<{
  backgroundProgressBar: string
}>`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.backgroundProgressBar};

  height: 15px;
  border-radius: 2em;
  overflow: hidden;
  cursor: pointer;
`

export const ProgressPercent = styled.div<{
  percent: number
  backgroundProgress: string
}>`
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
  z-index: 2;
  height: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: ${(props) => `${props.percent}%`};
  background-color: ${(props) => props.backgroundProgress};
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
`
