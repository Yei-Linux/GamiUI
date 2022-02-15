import React from 'react'
import CollapseProvider from 'context/CollapseProvider'

export interface ICollapseGroup {
  children: React.ReactNode
}

const CollapseGroup = ({ children }: ICollapseGroup) => {
  return <CollapseProvider>{children}</CollapseProvider>
}

export default CollapseGroup
