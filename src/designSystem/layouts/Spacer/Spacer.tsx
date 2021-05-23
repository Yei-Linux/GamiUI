import React from 'react'
import { SpacerWrapper } from './Spacer.styles'

export interface ISpacer {
  direction: 'left' | 'right' | 'top' | 'bottom'
  size: 1 | 2 | 3 | 4 | 5
}

const Spacer = ({ direction, size }: ISpacer) => {
  return <SpacerWrapper direction={direction} size={size} />
}

Spacer.defaultProps = {
  size: 1,
}

export default Spacer
