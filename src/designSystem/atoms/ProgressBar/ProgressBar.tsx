import React from 'react'
import { colorLight } from '../../../styles/theme'
import { ProgressBarWrapper, ProgressPercent } from './ProgressBar.styles'

export interface IProgressBar {
  backgroundProgressBar: string
  backgroundProgress: string
  percent: number
  onMouseDown?: (prop: any) => any
  onMouseUp?: (prop: any) => any
  onMouseLeave?: (prop: any) => any
  onMouseMove?: (prop: any) => any
}

const ProgressBar = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  onMouseMove,
}: IProgressBar) => {
  return (
    <ProgressBarWrapper
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      backgroundProgressBar={backgroundProgressBar}
    >
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
