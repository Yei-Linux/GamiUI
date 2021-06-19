import React, { Fragment } from 'react'
import Mask from '../../atoms/Mask'
import Transition from '../../styled/Transition'
import { DrawerWrapper } from './Drawer.styles'

export interface IDrawer {
  children?: React.ReactNode
  open?: boolean
  placement?: string
  width?: string
  height?: string
  onClose?: () => any
}

const Drawer = ({ children, open, onClose }: IDrawer) => {
  return (
    <Fragment>
      {open && (
        <Fragment>
          <Transition
            from={{
              duration: 1.5,
              opacity: 0.3,
            }}
            to={{
              opacity: 1,
            }}
            isReadyToInitAnimation={open}
          >
            <div>
              <Mask onClick={onClose} />
            </div>
          </Transition>

          <Transition
            to={{
              duration: 0.8,
              delay: 0,
              position: { axis: 'xPercent', value: 100 },
            }}
            isReadyToInitAnimation={open}
          >
            <DrawerWrapper>{children}</DrawerWrapper>
          </Transition>
        </Fragment>
      )}
    </Fragment>
  )
}

Drawer.defaultProps = {
  placement: 'left',
}

export default Drawer
