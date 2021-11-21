import React from 'react'
import Transition from 'designSystem/styled/Transition'
import { SlidingTransition } from './constants'
import * as S from './Sliding.styles'

export type TPlacementAnimationType = 'left' | 'right' | 'top' | 'bottom'

export interface ISliding {
  /**
   * Sliding Content
   */
  children: React.ReactNode
  /**
   * Is to init Animation
   */
  initAnimationToClose?: boolean
  /**
   * PlaceAnimation
   */
  placementAnimation?: TPlacementAnimationType
}

const Sliding = ({
  children,
  initAnimationToClose = false,
  placementAnimation = 'left',
}: ISliding) => {
  return (
    <Transition
      to={initAnimationToClose ? SlidingTransition(placementAnimation) : null}
      isReadyToInitAnimation={initAnimationToClose}
    >
      <S.Sliding>{children}</S.Sliding>
    </Transition>
  )
}

export default Sliding
