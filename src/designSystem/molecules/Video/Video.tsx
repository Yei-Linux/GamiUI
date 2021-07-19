import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Icon from '../../atoms/Icon'
import Range from '../../atoms/Range'
import Col from '../../layouts/Col'
import Row from '../../layouts/Row'
import Spacer from '../../layouts/Spacer'
import {
  VideDurationProgressBar,
  VideoControlsContainer,
  VideoOptionContainer,
  VideoReproduceButton,
  VideoVelocityRange,
  VideoVolume,
  VideoWrapper,
} from './Video.styles'

export interface IVideo {
  width?: string
  height?: string
  loop?: boolean
  url: string
}

const Video = ({ width, height, loop, url }: IVideo) => {
  const [velocity, setVelocity] = useState(1)
  const [play, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [muted] = useState(false)
  const player = useRef<any>(null)

  const [valueVideo, setValueVideo] = useState([0])
  const [valueVolume, setValueVolume] = useState([50])
  const [valueVelocity, setValueVelocity] = useState([100])

  const durationVideo = player?.current?.getDuration()

  const changeTimeVideo = (time: number) => player?.current?.seekTo(time)

  const handleTogglePlay = () => setPlay(!play)

  const handleChangeRangeDurationVideo = (valueDurationTime: number[]) => {
    setValueVideo(valueDurationTime)

    if (player?.current) {
      const videoTime = calculatePercentToVideoTime(
        valueDurationTime?.[0],
        durationVideo
      )
      !isNaN(videoTime) && changeTimeVideo(videoTime)
    }
  }

  const handleChangeDurationVideo = (state: any) => {
    if (player?.current) {
      const videoPercent = calculateVideoTimeToPercent(
        state?.playedSeconds,
        durationVideo
      )
      !isNaN(videoPercent) && setValueVideo([videoPercent])
    }
  }

  const handleChangeVolume = (volumeValue: number[]) => {
    setValueVolume(volumeValue)
    setVolume(volumeValue?.[0] / 100)
  }

  const handleChangeVelocity = (velocityValue: number[]) => {
    setValueVelocity(velocityValue)
    const rangeVelocity = Number.parseFloat(
      `${velocityValue?.[0] / 100}`
    ).toFixed(1)
    setVelocity(Number(rangeVelocity))
  }

  const calculatePercentToVideoTime = (
    percent: number,
    durationTotal: number
  ) => {
    return (percent * durationTotal) / 100
  }

  const calculateVideoTimeToPercent = (
    durationTime: number,
    durationTotal: number
  ) => {
    return (durationTime / durationTotal) * 100
  }

  return (
    <VideoWrapper>
      <ReactPlayer
        playbackRate={velocity}
        width={width}
        height={height}
        loop={loop}
        url={url}
        ref={player}
        volume={volume}
        muted={muted}
        playing={play}
        controls={false}
        onProgress={handleChangeDurationVideo}
      />
      <VideoControlsContainer>
        <VideDurationProgressBar>
          <Range
            value={valueVideo}
            onChangeFormItem={handleChangeRangeDurationVideo}
            heightRange="10px"
            sizeScrollRange="15px"
          />
        </VideDurationProgressBar>
        <Row isWrap={false}>
          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <VideoOptionContainer align="flex-end">
              <VideoVolume>
                <Range
                  iconId="volume"
                  value={valueVolume}
                  onChangeFormItem={handleChangeVolume}
                />
              </VideoVolume>
            </VideoOptionContainer>
          </Col>

          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <VideoReproduceButton>
              <Icon name={'prevskip'} size="20px" width="NORMAL" />
              <Spacer direction="left" />

              <Icon
                name={!play ? 'play' : 'pause'}
                size="40px"
                onClick={handleTogglePlay}
                shadow="LARGE"
                border="FULL"
                width="NORMAL"
              />

              <Spacer direction="right" />
              <Icon name={'nextskip'} size="20px" width="NORMAL" />
            </VideoReproduceButton>
          </Col>

          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <VideoOptionContainer align="flex-start">
              <VideoVelocityRange>
                <Range
                  iconId="options"
                  value={valueVelocity}
                  onChangeFormItem={handleChangeVelocity}
                />
              </VideoVelocityRange>
            </VideoOptionContainer>
          </Col>
        </Row>
      </VideoControlsContainer>
    </VideoWrapper>
  )
}

Video.defaultProps = {
  width: '100%',
  height: '100%',
  loop: true,
  url: 'https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164',
}

export default Video
