import React, { useMemo } from 'react'
import * as S from './Button.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
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
  const globalStyles = useMemo(
    () => getGenericPropStyles(genericsProps),
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
      className={cls(genericsProps?.className ?? '', {
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
