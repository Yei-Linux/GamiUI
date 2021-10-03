import React from 'react'
import * as S from './ProgressBar.styles'

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
   * Max Width
   */
  percent: number
}

const ProgressBar = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,
}: IProgressBar) => {
  return (
    <S.ProgressBar $backgroundProgressBar={backgroundProgressBar}>
      <S.ProgressPercent
        $percent={percent}
        $backgroundProgress={backgroundProgress}
      />
    </S.ProgressBar>
  )
}

export default ProgressBar
