import React, { Fragment } from 'react'
import useOpen from 'hooks/useOpen'

import Icon from '../../atoms/Icon'
import Transition from '../../styled/Transition'

import { positionFloating } from './constants'
import * as S from './Floating.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import Portal from 'hooks/Portal'
import { TFloatingComponent } from './type'

const Floating = ({
  onClose,
  open = false,
  direction = 'right',
  children,
  width,
  height,
  customCloseIcon = null,
  hasCloseIcon = true,
  zIndex,
  ...genericsProps
}: TFloatingComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      header: ['header'],
      icon: ['icon'],
    },
    componentPrefixCls: 'floating',
    customPrexiCls: '',
  })
  const { isOpen } = useOpen({ open })

  return (
    <Fragment>
      {isOpen && (
        <Portal container={document.body}>
          <Transition
            from={positionFloating[direction][open ? 'open' : 'close']?.from}
            to={positionFloating[direction][open ? 'open' : 'close'].to}
            isReadyToInitAnimation={open}
          >
            <S.FloatingStyled
              $width={width}
              $height={height}
              $zIndex={zIndex}
              className={cls(handles.wrapper, genericsProps?.className ?? '')}
              $direction={direction}
              {...getDesignProps(genericsProps)}
            >
              {hasCloseIcon && (
                <S.FloatingHeaderStyled className={cls(handles.header)}>
                  {customCloseIcon ?? (
                    <Icon
                      className={cls(handles.icon)}
                      color="#7868e6"
                      name="close"
                      size="15px"
                      onClick={onClose}
                    />
                  )}
                </S.FloatingHeaderStyled>
              )}

              {children}
            </S.FloatingStyled>
          </Transition>
        </Portal>
      )}
    </Fragment>
  )
}

const defaultProps = {
  rounded: 'sm',
  shadow: 'sm',
}

Floating.displayName = 'Floating'

type FloatingComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Floating,
  defaultProps
) as FloatingComponent<TFloatingComponent>
