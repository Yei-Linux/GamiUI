import React, { Fragment } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import useOpen from 'hooks/useOpen'

import Icon from '../../atoms/Icon'
import Transition from '../../styled/Transition'

import { positionFloating } from './constants'
import * as S from './Floating.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

type IOnClose = () => void

export interface FloatingProps extends IGeneralProps {
  /**
   * Is visible or not floating
   */
  visible?: boolean
  /**
   * Content
   */
  children: React.ReactNode
  /**
   * Floating direction
   */
  direction: 'left' | 'top' | 'right' | 'bottom'
  /**
   * Action on close floating message
   */
  onClose: IOnClose
}

const Floating = ({
  onClose,
  visible = false,
  direction = 'right',
  children,
  ...genericsProps
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
          <S.Floating
            $direction={direction}
            {...getGenericPropStyles(genericsProps)}
          >
            <S.FloatingHeader>
              <Icon fill="#7868e6" name="close" size="15px" onClick={onClose} />
            </S.FloatingHeader>

            {children}
          </S.Floating>
        </Transition>
      )}
    </Fragment>
  )
}

export default Floating
