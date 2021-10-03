import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import Icon from 'designSystem/atoms/Icon'
import Range from 'designSystem/atoms/Range'
import Col from 'designSystem/layouts/Col'
import Row from 'designSystem/layouts/Row'
import Spacer from 'designSystem/layouts/Spacer'

import * as S from './Video.styles'

export interface IVideo {
  width?: string
  height?: string
  loop?: boolean
  url: string
}

const Video = ({
  width = '100%',
  height = '100%',
  loop = true,
  url = 'https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164',
}: IVideo) => {
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

  const handleChangeDurationVideo = (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => {
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
    <S.Video>
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
      <S.VideoControlsContainer>
        <S.VideDurationProgressBar>
          <Range
            value={valueVideo}
            onChangeFormItem={handleChangeRangeDurationVideo}
            heightRange="10px"
            sizeScrollRange="15px"
          />
        </S.VideDurationProgressBar>
        <Row isWrap={false}>
          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <S.VideoOptionContainer align="flex-end">
              <S.VideoVolume>
                <Range
                  iconId="volume__small__mono"
                  value={valueVolume}
                  onChangeFormItem={handleChangeVolume}
                />
              </S.VideoVolume>
            </S.VideoOptionContainer>
          </Col>

          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <S.VideoReproduceButton>
              <Icon name="prevskip" size="20px" width="auto" />
              <Spacer direction="left" />

              <Icon
                name={!play ? 'play__mono' : 'pause__mono'}
                size="40px"
                onClick={handleTogglePlay}
                shadow="lg"
                border="lg"
                width="auto"
              />

              <Spacer direction="right" />
              <Icon name="nextskip" size="20px" width="auto" />
            </S.VideoReproduceButton>
          </Col>

          <Col spacing="sm" xs={4} sm={4} md={4} lg={4}>
            <S.VideoOptionContainer align="flex-start">
              <S.VideoVelocityRange>
                <Range
                  iconId="speed__mono"
                  value={valueVelocity}
                  onChangeFormItem={handleChangeVelocity}
                />
              </S.VideoVelocityRange>
            </S.VideoOptionContainer>
          </Col>
        </Row>
      </S.VideoControlsContainer>
    </S.Video>
  )
}

export default Video
