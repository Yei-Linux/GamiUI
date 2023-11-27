import React, { Fragment } from 'react'
import { TLayoutElement } from './type'

export const Wrapper = ({ children }: TLayoutElement) => {
  return <Fragment>{children}</Fragment>
}
Wrapper.displayName = 'Wrapper'
