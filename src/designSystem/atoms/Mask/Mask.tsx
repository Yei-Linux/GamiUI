import React from 'react'
import { MaskWrapper } from './Mask.styles'

export interface IMask {
  zIndex?: number
  background?: string
  onClick?: () => any
}

const Mask = ({ zIndex, onClick, background }: IMask) => {
  return (
    <MaskWrapper background={background} onClick={onClick} zIndex={zIndex} />
  )
}

Mask.defaultProps = {
  zIndex: 1,
  background: 'rgba(0, 0, 0, 0.45)',
}

export default Mask
