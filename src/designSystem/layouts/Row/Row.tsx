import React, { CSSProperties } from 'react'
import { RowWrapper } from './Row.styles'

export interface IRow {
  style?: CSSProperties
  children: React.ReactNode
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  alignItems: 'center' | 'flex-start' | 'flex-end' | 'normal'
  height?: string
  isWrap?: boolean
}

const Row = ({
  children,
  justifyContent,
  alignItems,
  style = {},
  height = '100%',
  isWrap = true,
}: IRow) => {
  return (
    <RowWrapper
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      style={style}
      isWrap={isWrap}
    >
      {children}
    </RowWrapper>
  )
}

Row.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
}

export default Row
