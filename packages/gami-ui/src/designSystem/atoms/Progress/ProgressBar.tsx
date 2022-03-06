import { cls } from 'core/utils/cls'
import React from 'react'
import { IProgressTypeContent } from './Progress'
import * as S from './Progress.styles'

const ProgressBar = ({
  percent,
  backgroundProgress,
  className = [],
}: IProgressTypeContent) => {
  return (
    <S.ProgressPercent
      className={cls(className)}
      $percent={percent}
      $backgroundProgress={backgroundProgress}
    >
      <S.ProgressPercentEffect />
    </S.ProgressPercent>
  )
}

export default ProgressBar
