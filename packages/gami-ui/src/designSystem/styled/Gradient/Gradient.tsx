import React, { Fragment } from 'react'
import { GradientsNames } from 'core/domain/types'
import useCloneElement from 'hooks/useCloneElements'
import { GradientTypes } from './constants'
import { makeGradient } from './helper'
import withDefaults from 'hocs/WithDefault'

interface CustomGradientColors {
  first: string
  second: string
}

export interface IGradient {
  /**
   * Component will be modified
   */
  children: React.ReactNode
  /**
   * Gradient Name
   */
  name: GradientsNames
  /**
   * Gradient custom colors in case not use gradient name
   */
  colors?: CustomGradientColors | null
}

const Gradient = ({ children, name = 'almost', colors = null }: IGradient) => {
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

const defaultProps = {}

type GradientComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Gradient,
  defaultProps
) as GradientComponent<IGradient>
