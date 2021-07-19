import styled from '@emotion/styled'

export const VideoWrapper = styled.div``

export const VideoControlsContainer = styled.div``

export const VideDurationProgressBar = styled.div``

export const VideoReproduceButton = styled.div`
  display: flex;
  justify-content: center;
`

export const VideoOptionContainer = styled.div<{ align: string }>`
  display: flex;
  justify-content: ${(props) => props.align};
`

export const VideoVolume = styled.div`
  max-width: 150px;
  width: 100%;
`

export const VideoVelocityRange = styled.div`
  width: 100%;
  max-width: 150px;
`

export const CurrentVideoTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DurationVideoTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
