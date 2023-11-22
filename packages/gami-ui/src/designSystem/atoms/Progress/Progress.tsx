import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { ProgressType } from 'core/domain/types'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React, { useEffect, useState } from 'react'
import { defaultTheme } from 'styles/tokens'
import * as S from './Progress.styles'
import ProgressBar from './ProgressBar'
import ProgressCircle from './ProgressCircle'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { timeout } from 'core/helpers/utilities.helper'
import { TIMEOUT_PERCENT_RENDER } from './constants'

export interface IProgressTypeContent {
  className?: string[]
  percent: number
  backgroundProgress: string
}

type IGeneralPropsProgress = Omit<
  IGeneralProps,
  | 'height'
  | 'textAlign'
  | 'fontWeight'
  | 'padding'
  | 'size'
  | 'onChange'
  | 'rounded'
>

export interface IProgress extends IGeneralPropsProgress {
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
  type?: ProgressType
  /**
   * Max Width
   */
  maxWidth?: string
  /**
   * Max Height
   */
  maxHeight?: string
}

const Progress = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,
  maxHeight,
  maxWidth,
  type = 'bar',
  ...genericsProps
}: IProgress) => {
  const { handles } = useCssHandle({
    classes: {
      progress: ['progress'],
      progress__bar: ['progress__bar'],
      progress__circle: ['progress__circle'],
    },
    componentPrefixCls: 'progress',
    customPrexiCls: genericsProps?.className,
  })
  const [percentLocal, setPercentLocal] = useState(0)

  const handlePercent = async () => {
    await timeout(TIMEOUT_PERCENT_RENDER)
    setPercentLocal(percent)
  }

  useEffect(() => {
    handlePercent()
  }, [percent])

  return (
    <S.Progress
      $maxHeight={maxHeight ?? 'none'}
      $maxWidth={maxWidth ?? 'none'}
      $backgroundProgressBar={backgroundProgressBar}
      className={cls(handles.progress, genericsProps?.className ?? '', {
        bar: type == 'bar',
        circle: type == 'circle',
      })}
      {...getDesignProps(genericsProps)}
    >
      {type == 'bar' && (
        <ProgressBar
          className={handles.progress__bar}
          percent={percentLocal}
          backgroundProgress={
            backgroundProgress ?? defaultTheme.light.primary.jordyBlue
          }
        />
      )}
      {type == 'circle' && (
        <ProgressCircle
          className={handles.progress__circle}
          percent={percentLocal}
          backgroundProgress={
            backgroundProgress ?? defaultTheme.light.primary.jordyBlue
          }
          background={backgroundProgressBar}
        />
      )}
    </S.Progress>
  )
}

const defaultProps = {}

Progress.displayName = 'Progress'

type ProgressComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Progress,
  defaultProps
) as ProgressComponent<IProgress>
