import React, { useMemo } from 'react'
import * as S from './Avatar.styles'

import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

import withDefaults from 'hocs/WithDefault'
import { cls } from 'core/utils/cls'
import AvatarGroup from './AvatarGroup'
import { TAvatarComponent } from './type'
import { maxSizeLetters } from './constants'
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
  zoomMode = 'none',
  textMode = 'firstcapitals',
  background = 'aliceblue',
  ...genericsProps
}: TAvatarComponent) => {
  const globalStyles = useMemo(
    () => getGenericPropStyles(genericsProps),
    [genericsProps]
  )

  return (
    <S.AvatarStyled
      className={cls(genericsProps?.className ?? '', {
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
