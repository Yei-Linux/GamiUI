import React, { Fragment } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import useOpen from 'hooks/useOpen'

import Icon from '../../atoms/Icon'
import Transition from '../../styled/Transition'

import { positionFloating } from './constants'
import * as S from './Floating.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { FloatingTypes } from 'core/domain/types'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'

type IOnClose = () => void

type TGenericStylesFloating = Omit<
  IGeneralProps,
  'size' | 'fontWeight' | 'textAlign' | 'margin' | 'padding'
>

export interface IFloating extends TGenericStylesFloating {
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
  direction: FloatingTypes
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
}: IFloating) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      header: ['header'],
      icon: ['icon'],
    },
    componentPrefixCls: 'floating',
    customPrexiCls: genericsProps?.className,
  })
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
            className={cls(handles.wrapper)}
            $direction={direction}
            {...getGenericPropStyles(genericsProps)}
          >
            <S.FloatingHeader className={cls(handles.header)}>
              <Icon
                className={cls(handles.icon)}
                color="#7868e6"
                name="close"
                size="15px"
                onClick={onClose}
              />
            </S.FloatingHeader>

            {children}
          </S.Floating>
        </Transition>
      )}
    </Fragment>
  )
}

const defaultProps = {
  rounded: 'sm',
  shadow: 'sm',
  width: 'auto',
  height: 'auto',
}

type FloatingComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Floating,
  defaultProps
) as FloatingComponent<IFloating>
