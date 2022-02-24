import React from 'react'
import Drawer from '../../molecules/Drawer'
import Gradient from '../../styled/Gradient'
import * as S from './Sider.styles'

export interface ISider {
  /**
   * Header Container
   */
  header: React.ReactNode

  /**
   * Children Prop
   */
  children: React.ReactNode
  /**
   * On close
   */
  onClose?: () => void
  /**
   * Open
   */
  open?: boolean
}

const Sider = ({ header, children, onClose, open }: ISider) => {
  return (
    <Gradient name="glassLight">
      <Drawer
        width="auto"
        height="full"
        onClose={onClose}
        open={open}
        withMask={false}
      >
        <S.Sider>
          <S.Header>{header}</S.Header>
          <S.Body>{children}</S.Body>
        </S.Sider>
      </Drawer>
    </Gradient>
  )
}

export default Sider
