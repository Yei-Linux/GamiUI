import 'regenerator-runtime/runtime'

import React, { Fragment } from 'react'

import { drawerTranstionByStates } from './constants'
import * as S from './Drawer.styles'
import useOpen from 'hooks/useOpen'

import Mask from 'designSystem/atoms/Mask'
import Transition from 'designSystem/styled/Transition'

export interface IDrawer {
  /**
   * Custom Styles for drawer
   */
  style?: React.CSSProperties
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Open or not of drawer
   */
  open?: boolean
  /**
   * Placement of drawer
   */
  placement?: string
  /**
   * Width
   */
  width?: string
  /**
   * Height
   */
  height?: string
  /**
   * Has Mask
   */
  withMask?: boolean
  /**
   * Action on close drawer
   */
  onClose?: () => void
}

const Drawer = ({
  children,
  open,
  onClose,
  withMask = true,
  style = {},
}: IDrawer) => {
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
            <S.Drawer style={style}>{children}</S.Drawer>
          </Transition>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Drawer
