import React, { Fragment } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { ButtonHtmlType } from 'core/domain/types'
import * as S from './Button.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import Spacer from 'designSystem/layouts/Spacer'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'

export interface IButton extends IGeneralProps, IComponentsVariant {
  /**
   * 	Display button content
   */
  children: React.ReactNode
  /**
   * 	Display prefix Content button
   */
  preffix?: React.ReactNode
  /**
   * Set html button types
   */
  type?: ButtonHtmlType
  /**
   * Display theme button variants
   */
  disable?: boolean
}

const Button = ({
  children,
  variant = 'primary',
  preffix,
  type = 'button',
  disable = false,
  bordered = false,
  ghost = false,
  flat = false,
  light = false,
  ...genericsProps
}: IButton) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      spacer__container: ['spacer__container'],
    },
    componentPrefixCls: 'button',
    customPrexiCls: genericsProps.className,
  })

  return (
    <S.Button
      {...getGenericPropStyles(genericsProps)}
      $variant={variant}
      $bordered={bordered}
      $ghost={ghost}
      $flat={flat}
      $light={light}
      type={type}
      className={cls(handles.wrapper, genericsProps?.className ?? '', {
        disabled: disable,
        enabled: !disable,
      })}
    >
      {preffix && (
        <Fragment>
          {preffix}
          <Spacer
            className={cls(handles.spacer__container)}
            direction="right"
          />
        </Fragment>
      )}
      {children}
    </S.Button>
  )
}

const defaultProps = {
  rounded: 'sm',
  shadow: 'md',
  width: 'auto',
  height: 'auto',
}

Button.displayName = 'Button'

type ButtonComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Button, defaultProps) as ButtonComponent<IButton>
