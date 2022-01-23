import classNames from 'classnames'
import React from 'react'
import { defaultTheme } from 'styles/tokens'
import * as S from './ProgressBar.styles'
import ProgressCircle from './ProgressCircle'

type TProgress = 'circle' | 'bar'

export interface IProgressBar {
  /**
   * Background of container
   */
  backgroundProgressBar?: string
  /**
   * Background of progress
   */
  backgroundProgress?: string
  /**
   * Percent Number
   */
  percent: number
  /**
   * Progress Type
   */
  type?: TProgress
  /**
   * Max Width
   */
  maxWidth?: string
  /**
   * Max Height
   */
  maxHeight?: string
}

const ProgressBar = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,

  maxHeight,
  maxWidth,
  type = 'bar',
}: IProgressBar) => {
  return (
    <S.ProgressBar
      $maxHeight={maxHeight ?? 'none'}
      $maxWidth={maxWidth ?? 'none'}
      $backgroundProgressBar={backgroundProgressBar}
      className={classNames({ bar: type == 'bar', circle: type == 'circle' })}
    >
      {type == 'bar' && (
        <S.ProgressPercent
          $percent={percent}
          $backgroundProgress={backgroundProgress}
        >
          <S.ProgressPercentEffect />
        </S.ProgressPercent>
      )}
      {type == 'circle' && (
        <ProgressCircle
          percent={percent}
          backgroundProgress={
            backgroundProgress ?? defaultTheme.light.primary.jordyBlue
          }
        />
      )}
    </S.ProgressBar>
  )
}

export default ProgressBar
