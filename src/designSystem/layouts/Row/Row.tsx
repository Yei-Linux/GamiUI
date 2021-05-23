import React from 'react'
import { RowWrapper } from './Row.styles'

export interface IRow {
  children: React.ReactNode
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
  alignItems: 'center' | 'flex-start' | 'flex-end'
}

const Row = ({ children, justifyContent, alignItems }: IRow) => {
  return (
    <RowWrapper justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </RowWrapper>
  )
}

Row.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
}

export default Row
