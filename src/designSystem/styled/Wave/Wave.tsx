import React from 'react'
import { WavessNames } from 'core/domain/types'
import { WaveTypes } from './constants'
import * as S from './Wave.styles'
import { theme } from 'styles/tokens'
import classNames from 'classnames'

export interface IWave {
  /**
   * Wave name to render
   */
  name: WavessNames
  /**
   * Direction wave on top or bottom
   */
  direction: 'top' | 'bottom'
  /**
   * Component of wave to wrap
   */
  children?: React.ReactNode
  /**
   * Color
   */
  color: string
  /**
   * Background
   */
  background: string
  /**
   * Using like background or not
   */
  isWaveLikeBackground: boolean
}

const Wave = ({
  name = 'one',
  direction = 'top',
  children,
  color = '#ffffff',
  background = '#7f9cf5',
  isWaveLikeBackground = false,
}: IWave) => {
  return (
    <S.Wave
      className={classNames({
        waveLikeBackground: isWaveLikeBackground,
        notWaveLikeBackground: !isWaveLikeBackground,
      })}
    >
      {!isWaveLikeBackground && direction == 'bottom' && children}
      <S.SvgWave
        $background={direction == 'bottom' ? color : background}
        className={classNames({
          waveLikeBackground: isWaveLikeBackground,
        })}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={direction == 'bottom' ? background : color}
          d={WaveTypes[name]}
        ></path>
      </S.SvgWave>

      {isWaveLikeBackground && children}
      {!isWaveLikeBackground && direction == 'top' && children}
    </S.Wave>
  )
}

export default Wave
