import React from 'react'
import { SiderWrapper } from './Sider.styles'

export interface ISider {
  prop?: any
}

const Sider = ({ prop }: ISider) => {
  return <SiderWrapper />
}

Sider.defaultProps = {}

export default Sider
