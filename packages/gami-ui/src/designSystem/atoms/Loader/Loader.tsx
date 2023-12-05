import React from 'react'
import { defaultTheme } from 'styles/tokens'
import { Points, Default, Spinner } from './types'
import { Wrapper } from './Wrapper'
import { TLoaderComponent, TLoaderTypes } from './type'

const Loader = ({
  type = 'default',
  background = defaultTheme.light.primary.jordyBlue,
}: TLoaderComponent) => {
  const loaderTypes: Record<TLoaderTypes, React.ElementType> = {
    default: Default,
    points: Points,
    spinner: Spinner,
  }
  const LoaderType = loaderTypes[type]

  return <LoaderType background={background} />
}

Loader.Wrapper = Wrapper

export default Loader
