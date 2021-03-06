import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import Image from '../Image'
import * as S from './Avatar.styles'

import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { REGEX_RULES } from 'core/utils/constants'
import withDefaults from 'hocs/WithDefault'
import { IUseImage } from 'hooks/useImage'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { TextModeType, ZoomModeType } from 'core/domain/types'
import { avatarTextModes, maxSizeLetters } from './constants'
import AvatarGroup from './AvatarGroup'

export interface IAvatar extends IGeneralProps, IUseImage {
  /**
   * Image source
   */
  src?: string
  /**
   * Show icon in avatar
   */
  icon?: React.ReactNode
  /**
   * 	Display text when image is missing
   */
  text?: string
  /**
   * 	Display altText in avatar
   */
  alt?: string
  /**
   * Change avatar background
   */
  background?: string
  /**
   * Change avatar text color
   */
  textColor?: string
  /**
   * Change avatar border color
   */
  borderColor?: string
  /**
   * Display avatar zoom
   */
  zoomMode?: ZoomModeType
  /**
   * Display avatar text mode
   */
  textMode?: TextModeType
}

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
}: IAvatar) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      image__container: ['image__container'],
    },
    componentPrefixCls: 'avatar',
    customPrexiCls: genericsProps.className,
  })

  const validateMaxLetters = (firstLettersGot: string) => {
    const size = firstLettersGot.length

    if (size > maxSizeLetters) {
      return firstLettersGot.substring(0, maxSizeLetters)
    }

    return firstLettersGot
  }

  const showOnlyFirstLettersOnText = (
    text: string,
    type: TextModeType
  ): string => {
    const regexType = avatarTextModes[type]
    const firstLettersCaptured: string[] | null = text.match(
      REGEX_RULES[regexType]
    )

    const joinFirstLetters = firstLettersCaptured?.join('') || ''

    return validateMaxLetters(joinFirstLetters)
  }

  const renderContent = (): React.ReactNode => {
    if (icon) return icon
    if (text) return showOnlyFirstLettersOnText(text, textMode)
    if (src)
      return (
        <Image
          className={cls(handles.image__container)}
          sets={sets}
          breakpoints={breakpoints}
          width="100%"
          height="100%"
          src={src}
          alt={alt}
        />
      )
    return null
  }

  return (
    <S.Avatar
      className={cls(handles.wrapper, genericsProps?.className ?? '', {
        zoom__outside: zoomMode == 'outside',
        zoom__inside: zoomMode == 'inside',
      })}
      $borderColor={borderColor}
      $textColor={textColor}
      $background={background}
      {...getGenericPropStyles(genericsProps)}
    >
      {renderContent()}
    </S.Avatar>
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

export default withDefaults(Avatar, defaultProps) as AvatarComponent<IAvatar>
