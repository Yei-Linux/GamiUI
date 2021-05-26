import React from 'react'
import { colorLight } from '../../../styles/theme'
import { ProgressBarWrapper, ProgressPercent } from './ProgressBar.styles'

export interface IProgressBar {
  backgroundProgressBar: string
  backgroundProgress: string
  percent: number
}

const ProgressBar = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,
}: IProgressBar) => {
  return (
    <ProgressBarWrapper backgroundProgressBar={backgroundProgressBar}>
      <ProgressPercent
        percent={percent}
        backgroundProgress={backgroundProgress}
      />
    </ProgressBarWrapper>
  )
}

ProgressBar.defaultProps = {
  percent: 100,
  backgroundProgressBar: colorLight.neutral.seven,
  backgroundProgress: colorLight.primary.one,
}

export default ProgressBar
