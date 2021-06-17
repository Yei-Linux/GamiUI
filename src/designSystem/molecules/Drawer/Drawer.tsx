import React from 'react'
import RCDrawer from 'rc-drawer'

export interface IDrawer {
  children?: React.ReactNode
  open?: boolean
  placement?: string
  width?: string
  height?: string
}

const Drawer = ({ children, open, width, height }: IDrawer) => {
  return (
    <RCDrawer showMask open={open} width={width} height={height}>
      {children}
    </RCDrawer>
  )
}

Drawer.defaultProps = {
  placement: 'left',
}

export default Drawer
