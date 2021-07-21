import React from 'react'
import { SpacerWrapper } from './Spacer.styles'

export interface ISpacer {
  direction: 'left' | 'right' | 'top' | 'bottom'
  size: 1 | 2 | 3 | 4 | 5
  customSize?: string
}

const Spacer = ({ direction, size, customSize }: ISpacer) => {
  return (
    <SpacerWrapper direction={direction} size={size} customSize={customSize} />
  )
}

Spacer.defaultProps = {
  size: 1,
  customSize: null,
}

export default Spacer
