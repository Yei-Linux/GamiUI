import { cls } from 'core/utils/cls'
import React from 'react'
import * as S from './Progress.styles'
import { TProgressTypeContent } from './type'

const ProgressBar = ({
  percent,
  backgroundProgress,
  className = [],
}: TProgressTypeContent) => {
  return (
    <S.ProgressPercentStyled
      className={cls(className)}
      $percent={percent}
      $backgroundProgress={backgroundProgress}
    >
      <S.ProgressPercentEffectStyled />
    </S.ProgressPercentStyled>
  )
}

export default ProgressBar
