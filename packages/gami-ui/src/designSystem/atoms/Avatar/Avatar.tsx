import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import Image from '../Image'
import * as S from './Avatar.styles'

import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { sizes } from 'styles/tokens/sizes'
import { REGEX_RULES } from 'core/utils/constants'
import withDefaults from 'hocs/WithDefault'
import { IUseImage } from 'hooks/useImage'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'

export type TZoomMode = 'outside' | 'inside' | 'none'

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
   * Change avatar border color
   */
  zoomMode?: TZoomMode
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

  const showOnlyFirstLettersOnText = (text: string): string => {
    const firstLettersCaptured: string[] | null = text.match(
      REGEX_RULES.CATCH_FIRST_LETTERS
    )
    const joinFirstLetters = firstLettersCaptured?.join('') || ''

    return joinFirstLetters
  }

  const renderContent = (): React.ReactNode => {
    if (icon) return icon
    if (text) return showOnlyFirstLettersOnText(text)
    if (src)
      return (
        <Image
          className={cls(handles.image__container)}
          sets={sets}
          breakpoints={breakpoints}
          width={sizes.avatar.width}
          height={sizes.avatar.height}
          src={src}
          alt={alt}
        />
      )
    return null
  }

  return (
    <S.Avatar
      className={cls(handles.wrapper, {
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

const defaultProps = {
  border: 'full',
  fontWeight: 'bold',
  textAlign: 'center',
}

export default withDefaults(Avatar, defaultProps)
