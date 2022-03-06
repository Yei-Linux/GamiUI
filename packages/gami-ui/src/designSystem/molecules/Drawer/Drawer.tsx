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
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import Portal from 'hooks/Portal'
import { DrawerPlacementTypes } from 'core/domain/types'
import Icon from 'designSystem/atoms/Icon'

type TGenericStylesFloating = Omit<
  IGeneralProps,
  | 'size'
  | 'fontWeight'
  | 'textAlign'
  | 'margin'
  | 'padding'
  | 'rounded'
  | 'width'
  | 'height'
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
   * Custom Icon
   */
  customCloseIcon?: React.ReactNode | null
  /**
   * Has Close Icon
   */
  hasCloseIcon?: boolean
  /**
   * Height
   */
  height?: number
  /**
   * Width
   */
  width?: number
  /**
   * ZIndex
   */
  zIndex?: number
  /**
   * Placemente Drawer
   */
  placement?: DrawerPlacementTypes
  /**
   * Action on close drawer
   */
  onClose?: () => void
}

const Drawer = ({
  children,
  open,
  onClose,
  placement = 'left',
  withMask = true,
  width = 280,
  height = 300,
  zIndex = 2,
  customCloseIcon = null,
  hasCloseIcon = false,
  ...genericsProps
}: IDrawer) => {
  const { handles } = useCssHandle({
    classes: {
      mask__wrapper: ['mask__wrapper'],
      mask: ['mask'],
      drawer: ['drawer'],
      drawer__icon__container: ['drawer__icon__container'],
      drawer__icon: ['drawer__icon'],
    },
    componentPrefixCls: 'drawer',
    customPrexiCls: genericsProps?.className,
  })
  const { isOpen } = useOpen({ open })

  return (
    <Fragment>
      {isOpen && (
        <Fragment>
          <Portal container={document.body}>
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
          </Portal>

          <Portal container={document.body}>
            <Transition
              to={
                drawerTranstionByStates.drawer[placement][
                  open ? 'open' : 'close'
                ].to
              }
              isReadyToInitAnimation={open}
            >
              <S.Drawer
                $zIndex={zIndex}
                $width={width}
                $height={height}
                className={cls(handles.drawer, genericsProps?.className ?? '', {
                  left: placement == 'left',
                  right: placement == 'right',
                  top: placement == 'top',
                  bottom: placement == 'bottom',
                })}
                {...getGenericPropStyles(genericsProps)}
              >
                {hasCloseIcon && (
                  <S.CloseIcon className={cls(handles.drawer__icon__container)}>
                    {customCloseIcon ?? (
                      <Icon
                        className={cls(handles.drawer__icon)}
                        color="#7868e6"
                        name="close"
                        size="20px"
                        onClick={onClose}
                      />
                    )}
                  </S.CloseIcon>
                )}
                {children}
              </S.Drawer>
            </Transition>
          </Portal>
        </Fragment>
      )}
    </Fragment>
  )
}

const defaultProps = {
  shadow: 'sm',
}

Drawer.displayName = 'Drawer'

type DrawerComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Drawer, defaultProps) as DrawerComponent<IDrawer>
