import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { IconNames } from 'core/domain/types'
import { IconsPack } from './constants'
import * as S from './Icon.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

export interface IOnlyIcon {
  /**
   * Fill Icon
   */
  fill?: string
  /**
   * Name
   */
  name?: IconNames
  /**
   * Size icon
   */
  size?: string
}

interface IIcon extends IOnlyIcon, IGeneralProps {}

const Icon = ({
  fill = 'none',
  name = 'facebook',
  size = '16px',
  ...genericsProps
}: IIcon) => {
  const [icon, setIcon] = useState(IconsPack?.[name])

  if (!icon) {
    return null
  }

  useEffect(() => {
    setIcon(IconsPack[name])
  }, [name])

  return (
    <S.Icon
      className={classNames({
        hoverIcon: [genericsProps.onClick],
      })}
      {...getGenericPropStyles(genericsProps)}
    >
      <S.Svg fill={fill} width={size} height={size} viewBox={icon.viewBox}>
        {icon.svg}
      </S.Svg>
    </S.Icon>
  )
}

export default Icon
