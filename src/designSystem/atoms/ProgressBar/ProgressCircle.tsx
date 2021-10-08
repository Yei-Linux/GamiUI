import React from 'react'
import Icon from '../Icon'
import * as S from './ProgressBar.styles'

export interface IProgressCircle {
  percent: number
  backgroundProgress: string
}

const ProgressCircle = ({ percent, backgroundProgress }: IProgressCircle) => {
  const SUCCESS_BACKGROUND_PROGRESS = '#52c41a'
  const CIRCLE_SIZE_PROPORTION = 29.531
  const PROPORTION = 10

  const finalPercent = percent < 0 ? 0 : percent > 100 ? 100 : percent
  const finalBackground =
    finalPercent == 100 ? SUCCESS_BACKGROUND_PROGRESS : backgroundProgress

  const calculateStrokeDashArrayWithPercent = () => {
    const sizeCalculated = (CIRCLE_SIZE_PROPORTION * finalPercent) / PROPORTION

    return `${sizeCalculated.toString()}, 295.31px`
  }

  return (
    <S.ProgressCircle>
      <svg className="ant-progress-circle" viewBox="0 0 100 100">
        <path
          className="ant-progress-circle-trail"
          d="M 50,50 m 0,-47
   a 47,47 0 1 1 0,94
   a 47,47 0 1 1 0,-94"
          stroke="#f5f5f5"
          strokeLinecap="round"
          strokeWidth="6"
          fillOpacity="0"
          style={{
            strokeDasharray: '295.31px, 295.31px',
            strokeDashoffset: '0px',
            transition:
              'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s',
          }}
        ></path>
        <path
          className="ant-progress-circle-path"
          d="M 50,50 m 0,-47
   a 47,47 0 1 1 0,94
   a 47,47 0 1 1 0,-94"
          stroke={finalBackground}
          strokeLinecap="round"
          strokeWidth="6"
          opacity="1"
          fillOpacity="0"
          style={{
            strokeDasharray: calculateStrokeDashArrayWithPercent(),
            strokeDashoffset: '0px',
            transition:
              'stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s',
          }}
        ></path>
        <path
          className="ant-progress-circle-path"
          d="M 50,50 m 0,-47
   a 47,47 0 1 1 0,94
   a 47,47 0 1 1 0,-94"
          stroke={finalBackground}
          strokeLinecap="round"
          strokeWidth="6"
          opacity="0"
          fillOpacity="0"
          style={{
            strokeDasharray: '0px, 295.31px',
            strokeDashoffset: '0px',
            transition:
              'stroke-dashoffset 0.3s ease 0s stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s, opacity 0.3s ease 0s',
          }}
        ></path>
      </svg>
      <S.ProgressText>
        {finalPercent == 100 ? (
          <Icon name="check__success" size="45%" />
        ) : (
          `${finalPercent}%`
        )}
      </S.ProgressText>
    </S.ProgressCircle>
  )
}

export default ProgressCircle
