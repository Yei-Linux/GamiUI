import React, { Fragment } from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import useOpen from '../../../hooks/useOpen'
import Icon from '../../atoms/Icon'
import Transition from '../../styled/Transition'
import { positionFloating } from './constants'
import { FloatingHeader, FloatingWrapper } from './Floating.styles'

type IOnClose = () => void

export interface FloatingProps extends IGeneralProps {
  visible?: boolean
  children: React.ReactNode
  direction: 'left' | 'top' | 'right' | 'bottom'
  onClose: IOnClose
}

const Floating = ({
  onClose,
  visible,
  children,
  direction,
  ...args
}: FloatingProps) => {
  const { isOpen } = useOpen({ open: visible })

  return (
    <Fragment>
      {isOpen && (
        <Transition
          from={positionFloating[direction][visible ? 'open' : 'close']?.from}
          to={positionFloating[direction][visible ? 'open' : 'close'].to}
          isReadyToInitAnimation={visible}
        >
          <FloatingWrapper direction={direction} {...args}>
            <FloatingHeader>
              <Icon fill="#7868e6" name="close" size="15px" onClick={onClose} />
            </FloatingHeader>

            {children}
          </FloatingWrapper>
        </Transition>
      )}
    </Fragment>
  )
}

Floating.defaultProps = {
  visible: false,
  direction: 'right',
  shadow: 'MEDIUM',
  border: 'LARGE',
}

export default Floating
