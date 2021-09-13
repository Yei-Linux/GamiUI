import React from 'react'
import * as S from './Col.styles'

const spacingValues = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  none: '0px',
}

type TCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type TSpacing = 'none' | 'sm' | 'md' | 'lg'

export interface ICol {
  /**
   * Children Prop
   */
  children: React.ReactNode
  /**
   * Spacing Prop
   */
  spacing: TSpacing
  /**
   * Extra Small Size
   */
  xs: TCols
  /**
   * Small Size
   */
  sm: TCols
  /**
   * Medium Size
   */
  md: TCols
  /**
   * Large Size
   */
  lg: TCols
}

const Col = ({ children, spacing, xs = 12, sm = 6, md = 4, lg = 3 }: ICol) => {
  return (
    <S.Col
      $xs={xs}
      $sm={sm}
      $md={md}
      $lg={lg}
      $spacing={spacingValues[spacing]}
    >
      {children}
    </S.Col>
  )
}

export default Col
