import React from 'react'
import Image from '../Image'
import { showOnlyFirstLettersOnText } from './helpers'
import { TAvatarComponent } from './type'

export type TRenderContent = Pick<
  TAvatarComponent,
  'icon' | 'text' | 'textMode' | 'src' | 'sets' | 'breakpoints' | 'alt'
> & {
  maxSizeLetters: number
}

export const renderContent = ({
  icon,
  text,
  textMode,
  src,
  sets,
  breakpoints,
  alt,
  maxSizeLetters,
}: TRenderContent): React.ReactNode => {
  if (icon) return icon
  if (text && textMode)
    return showOnlyFirstLettersOnText(text, textMode, maxSizeLetters)
  if (src)
    return (
      <Image
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
