import React, { useMemo } from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import * as S from './Link.styles'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import { TLinkComponent } from './type'

const Link = ({
  children,
  text = null,
  href,
  isExternal = false,
  variant = 'primary',
  bordered = false,
  ghost = false,
  flat = false,
  light = false,
  ...genericsProps
}: TLinkComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'link',
    customPrexiCls: '',
  })

  return (
    <S.LinkStyled
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      $variant={variant}
      $bordered={bordered}
      $ghost={ghost}
      $flat={flat}
      $light={light}
      {...globalStyles}
    >
      {text ?? children}
    </S.LinkStyled>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

Link.displayName = 'Link'

type LinkComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Link, defaultProps) as LinkComponent<TLinkComponent>
