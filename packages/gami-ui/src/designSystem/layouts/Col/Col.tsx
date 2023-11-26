import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import * as S from './Col.styles'
import { spacingValues } from './constants'
import { TColComponent } from './type'

const Col = ({
  style,
  className,
  children,
  spacing = 'none',
  customSpacing = '0px',
  xs = 12,
  sm = 6,
  md = 4,
  lg = 3,
}: TColComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'col',
    customPrexiCls: className,
  })

  return (
    <S.ColStyled
      style={style}
      className={cls(handles.wrapper, className ?? '', {
        custom: spacing == 'custom',
        nocustom: spacing !== 'custom',
      })}
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $spacing={spacing !== 'custom' ? spacingValues[spacing] : customSpacing}
    >
      {children}
    </S.ColStyled>
  )
}

const defaultProps = {}

Col.displayName = 'Col'

type ColComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Col, defaultProps) as ColComponent<TColComponent>
