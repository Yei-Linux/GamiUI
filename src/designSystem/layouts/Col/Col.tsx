import React from 'react'
import { ColWrapper } from './Col.styles'

const spacingValues = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  none: '0px'
}

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ICol {
  children: React.ReactNode
  spacing: 'none' | 'sm' | 'md' | 'lg'
  xs: Cols
  sm: Cols
  md: Cols
  lg: Cols
}

const Col = ({ children, spacing, xs, sm, md, lg }: ICol) => {
  return (
    <ColWrapper
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      spacing={spacingValues[spacing]}
    >
      {children}
    </ColWrapper>
  )
}

Col.defaultProps = {
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3,
}

export default Col
