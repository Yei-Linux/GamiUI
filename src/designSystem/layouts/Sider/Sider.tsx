import React from 'react'
import Drawer from '../../molecules/Drawer'
import { SiderContent, SiderHeader, SiderWrapper } from './Sider.styles'

export interface ISider {
  header: React.ReactNode
  children: React.ReactNode
  onClose?: () => any
  open?: boolean
}

const Sider = ({ header, children, onClose, open }: ISider) => {
  return (
    <Drawer
      width="auto"
      height="100%"
      onClose={onClose}
      open={open}
      withMask={false}
    >
      <SiderWrapper>
        <SiderHeader>{header}</SiderHeader>
        <SiderContent>{children}</SiderContent>
      </SiderWrapper>
    </Drawer>
  )
}

Sider.defaultProps = {}

export default Sider
