import {
  JustifyContentTypes,
  AlignItemsTypes,
  DirectionTypes,
} from 'core/domain/types'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React, { CSSProperties } from 'react'
import * as S from './Row.styles'

export interface IRow {
  /**
   * Gap
   */
  gap?: string | null
  /**
   * Width Row
   */
  width?: string

  /**
   * Style Custom
   */
  style?: CSSProperties

  /**
   * Children Prop
   */
  children: React.ReactNode

  /**
   * Justify Content
   */
  justifyContent?: JustifyContentTypes

  /**
   * Align Items
   */
  alignItems?: AlignItemsTypes

  /**
   * Height
   */
  height?: string

  /**
   * Is Wrap
   */
  isWrap?: boolean

  /**
   * Flex Direction
   */
  flexDirection?: DirectionTypes
  /**
   * Classname
   */
  className?: string
}

const Row = ({
  gap = null,
  children,
  justifyContent = 'center',
  alignItems = 'center',
  style = {},
  width = 'auto',
  height = '100%',
  isWrap = true,
  flexDirection = 'row',
  className,
}: IRow) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'row',
    customPrexiCls: className,
  })

  return (
    <S.Row
      $gap={gap}
      $width={width}
      $height={height}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
      style={style}
      className={cls(handles.wrapper, className ?? '', {
        wrap: isWrap,
        nowrap: !isWrap,
      })}
    >
      {children}
    </S.Row>
  )
}

const defaultProps = {}

Row.displayName = 'Row'

type RowComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Row, defaultProps) as RowComponent<IRow>
