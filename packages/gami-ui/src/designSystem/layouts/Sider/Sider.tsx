import React from 'react'
import Drawer from '../../molecules/Drawer'
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
    <Drawer
      style={{
        backgroundColor: 'rgba( 255, 255, 255, 0.55 )',
        backdropFilter: 'blur( 14.5px )',
      }}
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
  )
}

export default Sider
