import React, { Fragment } from 'react'
import { GradientsNames } from '../../../core/domain/types'
import useCloneElement from '../../../hooks/useCloneElements'
import { GradientTypes } from './constants'
import { makeGradient } from './helper'

interface CustomGradientColors {
  first: string
  second: string
}

export interface GradientProps {
  children: React.ReactNode
  name: GradientsNames
  colors: CustomGradientColors
}

const Gradient = ({ children, name, colors }: GradientProps) => {
  const makeStyleGradient = () =>
    !colors
      ? GradientTypes[name]
      : { background: makeGradient(colors?.first, colors?.second) }

  const { validatorChildrenLength, childrenWithProps } = useCloneElement({
    children,
    propsElement: {
      style: makeStyleGradient(),
    },
    maxChildrenNumber: 1,
    childrenTypes: [],
  })

  if (validatorChildrenLength(childrenWithProps)) {
    return null
  }

  return <Fragment>{childrenWithProps}</Fragment>
}

Gradient.defaultProps = {
  name: 'almost',
  colors: null,
}

export default Gradient
