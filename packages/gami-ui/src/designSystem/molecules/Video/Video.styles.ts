import styled from '@emotion/styled'
import { mixinFlexVariants } from 'styles/mixins/flex'

export const Video = styled.div``

export const VideoControlsContainer = styled.div``

export const VideDurationProgressBar = styled.div``

export const VideoReproduceButton = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center' })}
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
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
`

export const DurationVideoTime = styled.div`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}
`
