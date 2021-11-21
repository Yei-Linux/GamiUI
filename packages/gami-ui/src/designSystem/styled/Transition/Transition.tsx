import React, { Fragment, useEffect, useRef, useState } from 'react'
import useCloneElement from 'hooks/useCloneElements'
import { gsap } from 'gsap'
import { IDynamicObjectWithField } from 'core/domain/interfaces/common'

interface IPosition {
  axis: 'x' | 'y' | 'xPercent' | 'yPercent' | string
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
  /**
   * Component will be has animation
   */
  isReadyToInitAnimation?: boolean
  /**
   * Component will be has from animation
   */
  from?: ITransitionProp | null
  /**
   * Component will be has to animation
   */
  to?: ITransitionProp | null
  /**
   * Component
   */
  children: React.ReactNode
}

const Transition = ({
  isReadyToInitAnimation = false,
  from = null,
  to = null,
  children,
}: ITransition) => {
  const [timeline] = useState(gsap.timeline())
  const containerRef = useRef(null)

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
    const gsapProps: IDynamicObjectWithField = {}

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

    if (from) timeline.from(containerRef?.current, buildingGsapProps(from))
    if (to) timeline.to(containerRef?.current, buildingGsapProps(to))
  }

  useEffect(() => {
    timeline.clear()
    buildingTimeLine()
  }, [isReadyToInitAnimation])

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  return <Fragment>{childrenWithProps}</Fragment>
}

export default Transition
