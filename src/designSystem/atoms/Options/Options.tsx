import React from 'react'
import { OptionsWrapper } from './Options.styles'

export interface IOptions {
  prop?: any
}

const Options = ({ prop }: IOptions) => {
  return <OptionsWrapper />
}

Options.defaultProps = {}

export default Options
