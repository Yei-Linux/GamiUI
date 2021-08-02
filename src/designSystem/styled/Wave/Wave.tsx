import React from 'react'
import { WavessNames } from '../../../core/domain/types'
import { colorLight } from '../../../styles/theme'
import { WaveTypes } from './constants'
import { SvgWave, WaveWrapper } from './Wave.styles'

export interface WaveProps {
  name: WavessNames
  direction: 'top' | 'bottom'
  children?: React.ReactNode
  color: string
  background: string
  isWaveLikeBackground: boolean
}

const Wave = ({
  name,
  direction,
  children,
  color,
  background,
  isWaveLikeBackground,
}: WaveProps) => {
  return (
    <WaveWrapper isWaveLikeBackground={isWaveLikeBackground}>
      {!isWaveLikeBackground && direction == 'bottom' && children}
      <SvgWave
        isWaveLikeBackground={isWaveLikeBackground}
        background={direction == 'bottom' ? color : background}
        direction={direction}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={direction == 'bottom' ? background : color}
          d={WaveTypes[name]}
        ></path>
      </SvgWave>
      {isWaveLikeBackground && children}
      {!isWaveLikeBackground && direction == 'top' && children}
    </WaveWrapper>
  )
}

Wave.defaultProps = {
  name: 'one',
  direction: 'top',
  color: colorLight.primary.one,
  background: colorLight.neutral.nine,
  isWaveLikeBackground: false,
}

export default Wave
