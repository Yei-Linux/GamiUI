import React from 'react'
import { zIndex as zIndexToken } from 'styles/tokens'
import * as S from './Mask.styles'

export type TZIndex = 0 | 1 | 2 | 3 | 4 | 5

export interface IMask {
  /**
   * classname
   */
  className?: string
  /**
   * ZIndex of Layer Mask
   */
  zIndex?: TZIndex

  /**
   * Background Mask
   */
  background?: string

  /**
   * Action Click on Mask
   */
  onClick?: () => void
}

const Mask = ({
  className,
  zIndex = 1,
  onClick,
  background = 'rgba(0, 0, 0, 0.45)',
}: IMask) => {
  return (
    <S.Mask
      className={className}
      onClick={onClick}
      $background={background}
      $zIndex={zIndexToken[zIndex] as TZIndex}
    />
  )
}

Mask.displayName = 'Mask'

export default Mask
