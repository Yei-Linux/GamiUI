import React from 'react'
import { MaskWrapper } from './Mask.styles'

export interface IMask {
  zIndex?: number
  onClick?: ()=> any
}

const Mask = ({ zIndex, onClick }: IMask) => {
  return <MaskWrapper onClick={onClick} zIndex={zIndex}/>
}

Mask.defaultProps = {
  zIndex: 1
}

export default Mask
