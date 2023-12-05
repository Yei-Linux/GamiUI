import 'regenerator-runtime/runtime'

import React, { Fragment, useMemo } from 'react'

import { drawerTranstionByStates } from './constants'
import * as S from './Drawer.styles'
import useOpen from 'hooks/useOpen'

import Mask from 'designSystem/atoms/Mask'
import Transition from 'designSystem/styled/Transition'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import Portal from 'hooks/Portal'
import Icon from 'designSystem/atoms/Icon'
import { TDrawerComponent } from './type'

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
}: TDrawerComponent) => {
  const { handles } = useCssHandle({
    classes: {
      mask__wrapper: ['mask__wrapper'],
      mask: ['mask'],
      drawer: ['drawer'],
      drawer__icon__container: ['drawer__icon__container'],
      drawer__icon: ['drawer__icon'],
    },
    componentPrefixCls: 'drawer',
    customPrexiCls: '',
  })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
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
              <S.DrawerStyled
                $zIndex={zIndex}
                $width={width}
                $height={height}
                className={cls(handles.drawer, genericsProps?.className ?? '', {
                  left: placement == 'left',
                  right: placement == 'right',
                  top: placement == 'top',
                  bottom: placement == 'bottom',
                })}
                {...globalStyles}
              >
                {hasCloseIcon && (
                  <S.CloseIconStyled
                    className={cls(handles.drawer__icon__container)}
                  >
                    {customCloseIcon ?? (
                      <Icon
                        className={cls(handles.drawer__icon)}
                        color="#7868e6"
                        name="close"
                        size="20px"
                        onClick={onClose}
                      />
                    )}
                  </S.CloseIconStyled>
                )}
                {children}
              </S.DrawerStyled>
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

export default withDefaults(
  Drawer,
  defaultProps
) as DrawerComponent<TDrawerComponent>
