import 'regenerator-runtime/runtime'
import React, { Fragment } from 'react'
import Mask from '../../atoms/Mask'
import Transition from '../../styled/Transition'
import { drawerTranstionByStates } from './constants'
import { DrawerWrapper } from './Drawer.styles'
import useOpen from '../../../hooks/useOpen'

export interface IDrawer {
  style?: React.CSSProperties
  children?: React.ReactNode
  open?: boolean
  placement?: string
  width?: string
  height?: string
  withMask?: boolean
  onClose?: () => any
}

const Drawer = ({ children, open, onClose, withMask, style = {} }: IDrawer) => {
  const { isOpen } = useOpen({ open })

  return (
    <Fragment>
      {isOpen && (
        <Fragment>
          <Transition
            from={drawerTranstionByStates.mask[open ? 'open' : 'close']?.from}
            to={drawerTranstionByStates.mask[open ? 'open' : 'close'].to}
            isReadyToInitAnimation={open}
          >
            <div>
              <Mask
                onClick={onClose}
                background={withMask ? 'rgba(0, 0, 0, 0.45)' : 'transparent'}
              />
            </div>
          </Transition>

          <Transition
            to={drawerTranstionByStates.drawer[open ? 'open' : 'close'].to}
            isReadyToInitAnimation={open}
          >
            <DrawerWrapper style={style}>{children}</DrawerWrapper>
          </Transition>
        </Fragment>
      )}
    </Fragment>
  )
}

Drawer.defaultProps = {
  placement: 'left',
  withMask: true,
}

export default Drawer
