import React from 'react'
import { SiderWrapper } from './Sider.styles'

export interface ISider {
  children: React.ReactNode
}

const Sider = ({ children }: ISider) => {
  return <SiderWrapper>{children}</SiderWrapper>
}

Sider.defaultProps = {}

export default Sider
