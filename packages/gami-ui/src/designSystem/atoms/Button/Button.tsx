import React, { useMemo } from 'react'
import * as S from './Button.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { TButtonComponent } from './type'
import { ButtonPreffixer } from './ButtonPreffixer'

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
}: TButtonComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      spacer__container: ['spacer__container'],
    },
    componentPrefixCls: 'button',
    customPrexiCls: genericsProps.className,
  })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )

  return (
    <S.ButtonStyled
      {...globalStyles}
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
      {preffix && <ButtonPreffixer preffix={preffix} />}
      {children}
    </S.ButtonStyled>
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

export default withDefaults(
  Button,
  defaultProps
) as ButtonComponent<TButtonComponent>
