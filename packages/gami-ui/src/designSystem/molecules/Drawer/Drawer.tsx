import 'regenerator-runtime/runtime'

import React, { Fragment } from 'react'

import { drawerTranstionByStates } from './constants'
import * as S from './Drawer.styles'
import useOpen from 'hooks/useOpen'

import Mask from 'designSystem/atoms/Mask'
import Transition from 'designSystem/styled/Transition'
import withDefaults from 'hocs/WithDefault'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

type TGenericStylesFloating = Omit<
  IGeneralProps,
  'size' | 'fontWeight' | 'textAlign' | 'margin' | 'padding'
>

export interface IDrawer extends TGenericStylesFloating {
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Open or not of drawer
   */
  open?: boolean
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
  ...genericsProps
}: IDrawer) => {
  const { handles } = useCssHandle({
    classes: {
      mask__wrapper: ['mask__wrapper'],
      mask: ['mask'],
      drawer: ['drawer'],
    },
    componentPrefixCls: 'drawer',
    customPrexiCls: genericsProps?.className,
  })
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
            <div className={cls(handles.mask__wrapper)}>
              <Mask
                className={cls(handles.mask)}
                onClick={onClose}
                background={withMask ? 'rgba(0, 0, 0, 0.45)' : 'transparent'}
              />
            </div>
          </Transition>

          <Transition
            to={drawerTranstionByStates.drawer[open ? 'open' : 'close'].to}
            isReadyToInitAnimation={open}
          >
            <S.Drawer className={cls(handles.drawer)}>{children}</S.Drawer>
          </Transition>
        </Fragment>
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

type DrawerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Drawer, defaultProps) as DrawerComponent<IDrawer>
