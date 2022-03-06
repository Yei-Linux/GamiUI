import React from 'react'
import * as S from './Spacer.styles'

export type TDirection = 'left' | 'right' | 'top' | 'bottom'

export type TSize = 1 | 2 | 3 | 4 | 5

export interface ISpacer {
  /**
   * Spacer Direction
   */
  direction: TDirection
  /**
   * Size of spacer
   */
  size?: TSize
  /**
   * Custom Size
   */
  customSize?: string
  /**
   * Classname
   */
  className?: string
}

const Spacer = ({ direction, size = 1, customSize, className }: ISpacer) => {
  return (
    <S.Spacer
      $direction={direction}
      $size={size}
      $customSize={customSize}
      className={className}
    />
  )
}

Spacer.displayName = 'Spacer'

export default Spacer
