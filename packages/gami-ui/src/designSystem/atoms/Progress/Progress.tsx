import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React, { useMemo } from 'react'
import { defaultTheme } from 'styles/tokens'
import * as S from './Progress.styles'
import ProgressBar from './ProgressBar'
import ProgressCircle from './ProgressCircle'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { TProgressComponent } from './type'
import { useProgress } from './useProgress'

const Progress = ({
  backgroundProgressBar,
  backgroundProgress,
  percent,
  maxHeight,
  maxWidth,
  type = 'bar',
  ...genericsProps
}: TProgressComponent) => {
  const globalStyled = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      progress: ['progress'],
      progress__bar: ['progress__bar'],
      progress__circle: ['progress__circle'],
    },
    componentPrefixCls: 'progress',
    customPrexiCls: genericsProps?.className,
  })
  const { percentLocal } = useProgress({ percent })

  return (
    <S.ProgressStyled
      $maxHeight={maxHeight ?? 'none'}
      $maxWidth={maxWidth ?? 'none'}
      $backgroundProgressBar={backgroundProgressBar}
      className={cls(handles.progress, genericsProps?.className ?? '', {
        bar: type == 'bar',
        circle: type == 'circle',
      })}
      {...globalStyled}
    >
      {type == 'bar' && (
        <ProgressBar
          className={cls(handles.progress__bar)}
          percent={percentLocal}
          backgroundProgress={
            backgroundProgress ?? defaultTheme.light.primary.jordyBlue
          }
        />
      )}
      {type == 'circle' && (
        <ProgressCircle
          className={cls(handles.progress__circle)}
          percent={percentLocal}
          backgroundProgress={
            backgroundProgress ?? defaultTheme.light.primary.jordyBlue
          }
          background={backgroundProgressBar}
        />
      )}
    </S.ProgressStyled>
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
) as ProgressComponent<TProgressComponent>
