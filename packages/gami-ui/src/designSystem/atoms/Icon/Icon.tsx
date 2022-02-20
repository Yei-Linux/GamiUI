import React, { useEffect, useState } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IconNames } from 'core/domain/types'
import { IconsPack } from './constants'
import * as S from './Icon.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export interface IOnlyIcon {
  /**
   * Fill Icon
   */
  color?: string
  /**
   * Name
   */
  name?: IconNames
  /**
   * Size icon
   */
  size?: string
}

type IGeneralPropsIcon = Omit<
  IGeneralProps,
  'size' | 'width' | 'height' | 'textAlign'
>

interface IIcon extends IOnlyIcon, IGeneralPropsIcon {}

const Icon = ({
  color = '#7f9cf5',
  name = 'facebook',
  size = '16px',
  ...genericsProps
}: IIcon) => {
  const [icon, setIcon] = useState(IconsPack(color)?.[name])
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      svg: ['svg'],
    },
    componentPrefixCls: 'icon',
    customPrexiCls: genericsProps?.className,
  })

  if (!icon) {
    return null
  }

  useEffect(() => {
    setIcon(IconsPack(color)?.[name])
  }, [name])

  return (
    <S.Icon
      {...getGenericPropStyles(genericsProps)}
      className={cls(handles.wrapper, {
        hoverIcon: genericsProps?.onClick ? true : false,
      })}
    >
      <S.Svg fill="none" width={size} height={size} viewBox={icon.viewBox}>
        {icon.svg}
      </S.Svg>
    </S.Icon>
  )
}

const defaultProps = {
  rounded: 'none',
  shadow: 'none',
}

type IconComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Icon, defaultProps) as IconComponent<IIcon>
