import React, { Fragment, useEffect, useRef } from 'react'
import useCloneElement from '../../../hooks/useCloneElements'
import { gsap } from 'gsap'

interface IPosition {
  axis: 'x' | 'y' | 'xPercent' | 'yPercent'
  value: number
}

interface ITransitionProp {
  scale?: number | null
  ease?: string | null
  opacity?: number | null
  duration?: number | null
  position?: IPosition | null
  delay?: number | null
}

export interface ITransition {
  isReadyToInitAnimation: boolean

  from?: ITransitionProp
  to?: ITransitionProp

  children: any
}

const Transition = ({
  isReadyToInitAnimation,

  from,
  to,

  children,
}: ITransition) => {
  const containerRef: any = useRef(null)

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      ref: containerRef,
    },
    maxChildrenNumber: 1,
  })

  const buildingGsapProps = ({
    scale = null,
    ease = null,
    opacity = null,
    duration = null,
    position = null,
    delay = null,
  }: ITransitionProp) => {
    const gsapProps: any = {}

    if (scale) gsapProps['scale'] = scale
    if (ease) gsapProps['ease'] = ease
    if (opacity) gsapProps['opacity'] = opacity
    if (duration) gsapProps['duration'] = duration
    if (delay) gsapProps['delay'] = delay
    if (position) gsapProps[position.axis] = position.value

    return gsapProps
  }

  const buildingTimeLine = () => {
    if (!from && !to) return

    const timeline = gsap.timeline()

    if (from) timeline.from(containerRef?.current, buildingGsapProps(from))
    if (to) timeline.to(containerRef?.current, buildingGsapProps(to))
  }

  useEffect(() => {
    isReadyToInitAnimation && buildingTimeLine()
  }, [isReadyToInitAnimation])

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  return <Fragment>{childrenWithProps}</Fragment>
}

Transition.defaultProps = {
  isReadyToInitAnimation: false,
  from: null,
  to: null,
}

export default Transition
