import React, { useMemo } from 'react'
import * as S from './Avatar.styles'

import { getDesignProps } from 'styles/utilities/genericPropStyles'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { maxSizeLetters } from './constants'
import AvatarGroup from './AvatarGroup'
import { TAvatarComponent } from './type'
import { renderContent } from './utils'

const Avatar = ({
  src,
  icon,
  text,
  alt,
  sets,
  breakpoints,
  textColor,
  borderColor,
  background,
  zoomMode = 'none',
  textMode = 'firstcapitals',
  ...genericsProps
}: TAvatarComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      image__container: ['image__container'],
    },
    componentPrefixCls: 'avatar',
    customPrexiCls: genericsProps.className,
  })

  return (
    <S.AvatarStyled
      className={cls(handles.wrapper, {
        zoom__outside: zoomMode == 'outside',
        zoom__inside: zoomMode == 'inside',
      })}
      $borderColor={borderColor}
      $textColor={textColor}
      $background={background}
      {...globalStyles}
    >
      {renderContent({
        icon,
        text,
        textMode,
        src,
        sets,
        breakpoints,
        alt,
        maxSizeLetters,
      })}
    </S.AvatarStyled>
  )
}

Avatar.Group = AvatarGroup

Avatar.displayName = 'Avatar'

const defaultProps = {
  rounded: 'full',
  fontWeight: 'bold',
  textAlign: 'center',
}

type AvatarComponent<P> = React.NamedExoticComponent<P> & {
  Group: typeof AvatarGroup
  defaultProps: P
}

export default withDefaults(
  Avatar,
  defaultProps
) as AvatarComponent<TAvatarComponent>
