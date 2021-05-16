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
}

const Wave = ({ name, direction, children, color, background }: WaveProps) => {
  return (
    <WaveWrapper>
      {direction == 'bottom' && children}
      <SvgWave
        background={ direction == 'bottom' ? color : background}
        direction={direction}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fill={direction == 'bottom' ? background : color} d={WaveTypes[name]}></path>
      </SvgWave>
      {direction == 'top' && children}
    </WaveWrapper>
  )
}

Wave.defaultProps = {
  name: 'one',
  direction: 'top',
  color: colorLight.primary.one,
  background: colorLight.neutral.nine,
}

export default Wave
