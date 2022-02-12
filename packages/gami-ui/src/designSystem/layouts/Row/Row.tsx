import classNames from 'classnames'
import React, { CSSProperties } from 'react'
import * as S from './Row.styles'

export type TJustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'

export type TAlignItems = 'center' | 'flex-start' | 'flex-end' | 'normal'

export type TFlexDirection = 'row' | 'column'

export interface IRow {
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
  justifyContent?: TJustifyContent

  /**
   * Align Items
   */
  alignItems?: TAlignItems

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
  flexDirection?: TFlexDirection
  /**
   * Classname
   */
  className?: string
}

const Row = ({
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
  return (
    <S.Row
      $width={width}
      $height={height}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexDirection={flexDirection}
      style={style}
      className={classNames(className, { wrap: isWrap, nowrap: !isWrap })}
    >
      {children}
    </S.Row>
  )
}

export default Row
