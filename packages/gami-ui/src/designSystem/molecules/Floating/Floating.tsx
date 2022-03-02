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
import Portal from 'hooks/Portal'

type IOnClose = () => void

type TGenericStylesFloating = Omit<
  IGeneralProps,
  | 'size'
  | 'fontWeight'
  | 'textAlign'
  | 'margin'
  | 'padding'
  | 'width'
  | 'height'
>

export interface IFloating extends TGenericStylesFloating {
  /**
   * Is visible or not floating
   */
  open?: boolean
  /**
   * Content
   */
  children: React.ReactNode
  /**
   * Floating direction
   */
  direction: FloatingTypes
  /**
   * Height
   */
  height?: string
  /**
   * Width
   */
  width?: string
  /**
   * Custom Icon
   */
  customCloseIcon?: React.ReactNode | null
  /**
   * Has Close Icon
   */
  hasCloseIcon?: boolean
  /**
   * ZIndex
   */
  zIndex?: number
  /**
   * Action on close floating message
   */
  onClose: IOnClose
}

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
            <S.Floating
              $width={width}
              $height={height}
              $zIndex={zIndex}
              className={cls(handles.wrapper, genericsProps?.className ?? '')}
              $direction={direction}
              {...getGenericPropStyles(genericsProps)}
            >
              {hasCloseIcon && (
                <S.FloatingHeader className={cls(handles.header)}>
                  {customCloseIcon ?? (
                    <Icon
                      className={cls(handles.icon)}
                      color="#7868e6"
                      name="close"
                      size="15px"
                      onClick={onClose}
                    />
                  )}
                </S.FloatingHeader>
              )}

              {children}
            </S.Floating>
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

type FloatingComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Floating,
  defaultProps
) as FloatingComponent<IFloating>
