import React from 'react'
import { defaultTheme } from 'styles/tokens'
import { Points, Default, Spinner } from './types'
import { Wrapper } from './Wrapper'

export type TLoader = 'default' | 'points' | 'spinner'
export interface ILoaderType {
  background: string
}

export interface ILoader {
  /**
   * Prop Of Loader
   */
  type: TLoader
  /**
   * Background color
   */
  background?: string
}

const Loader = ({
  type = 'default',
  background = defaultTheme.light.primary.jordyBlue,
}: ILoader) => {
  const loaderTypes: Record<TLoader, React.ElementType> = {
    default: Default,
    points: Points,
    spinner: Spinner,
  }
  const LoaderType = loaderTypes[type]

  return <LoaderType background={background} />
}

Loader.Wrapper = Wrapper

export default Loader
