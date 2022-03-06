import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Link.styles'
import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'

export interface ILink extends IGeneralProps, IComponentsVariant {
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Text Link
   */
  text?: string | null
  /**
   * Url
   */
  href: string

  /**
   * Is External
   */
  isExternal?: boolean
}

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
}: ILink) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'link',
    customPrexiCls: genericsProps.className,
  })
  return (
    <S.Link
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      href={href}
      target={isExternal ? '_blank' : '_self'}
      $variant={variant}
      $bordered={bordered}
      $ghost={ghost}
      $flat={flat}
      $light={light}
      {...getGenericPropStyles(genericsProps)}
    >
      {text ?? children}
    </S.Link>
  )
}

const defaultProps = {
  shadow: 'none',
  width: 'auto',
  height: 'auto',
}

type LinkComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Link, defaultProps) as LinkComponent<ILink>
