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
}

const Row = ({
  children,
  justifyContent,
  alignItems,
  style = {},
  height = '100%',
}: IRow) => {
  return (
    <RowWrapper
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      style={style}
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
