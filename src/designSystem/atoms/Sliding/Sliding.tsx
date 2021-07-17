import React from 'react'
import Transition from '../../styled/Transition'
import { SlidingTransition, TPlacementAnimationType } from './constants'
import { SlidingWrapper } from './Sliding.styles'

export interface ISliding {
  children: React.ReactNode
  initAnimationToClose?: boolean
  placementAnimation?: TPlacementAnimationType
}

const Sliding = ({
  children,
  initAnimationToClose,
  placementAnimation = 'left',
}: ISliding) => {
  return (
    <Transition
      to={initAnimationToClose ? SlidingTransition(placementAnimation) : null}
      isReadyToInitAnimation={initAnimationToClose}
    >
      <SlidingWrapper>{children}</SlidingWrapper>
    </Transition>
  )
}

Sliding.defaultProps = {
  initAnimation: false,
}

export default Sliding
