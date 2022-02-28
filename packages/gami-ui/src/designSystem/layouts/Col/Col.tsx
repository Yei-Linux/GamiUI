import { ColSpacingTypes, ColTypes } from 'core/domain/types'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import * as S from './Col.styles'
import { spacingValues } from './constants'

export interface ICol {
  /**
   * Classname Prop
   */
  className?: string
  /**
   * Children Prop
   */
  children: React.ReactNode
  /**
   * Spacing Prop
   */
  spacing: ColSpacingTypes
  /**
   * Custom Spacing Prop
   */
  customSpacing?: string
  /**
   * Extra Small Size
   */
  xs?: ColTypes
  /**
   * Small Size
   */
  sm?: ColTypes
  /**
   * Medium Size
   */
  md?: ColTypes
  /**
   * Large Size
   */
  lg?: ColTypes
}

const Col = ({
  className,
  children,
  spacing,
  customSpacing = '0px',
  xs = 12,
  sm = 6,
  md = 4,
  lg = 3,
}: ICol) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'col',
    customPrexiCls: className,
  })
  return (
    <S.Col
      className={cls(handles.wrapper, {
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
    </S.Col>
  )
}

const defaultProps = {}

type ColComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Col, defaultProps) as ColComponent<ICol>
