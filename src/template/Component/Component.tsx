import React from 'react'
import { ComponentWrapper } from './Component.styles'

export interface IComponent {
  prop?: any
}

const Component = ({ prop }: IComponent) => {
  return <ComponentWrapper />
}

Component.defaultProps = {}

export default Component
