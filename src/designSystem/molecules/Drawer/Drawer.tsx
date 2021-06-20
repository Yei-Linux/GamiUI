import 'regenerator-runtime/runtime'
import React, { Fragment, useEffect, useState } from 'react'
import Mask from '../../atoms/Mask'
import Transition from '../../styled/Transition'
import { drawerTranstionByStates } from './constants'
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
  const [isFirstTime, setIsFirstTime] = useState(!open)
  const [isOpen, setIsOpen] = useState(open)

  const timeout = (t: number): Promise<any> => {
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, t)
    })
  }

  const updateIsOpen = async () => {
    if (open) {
      isFirstTime && setIsFirstTime(false)
      setIsOpen(true)
      return
    }

    if (!isFirstTime) {
      await timeout(300)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    updateIsOpen()
  }, [open])

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
              <Mask onClick={onClose} />
            </div>
          </Transition>

          <Transition
            to={drawerTranstionByStates.drawer[open ? 'open' : 'close'].to}
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
