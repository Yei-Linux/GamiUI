import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { colorLight } from '../../../styles/theme'
import Image from '../Image'
import { AvatarWrapper } from './Avatar.styles'

export interface IAvatar extends IGeneralProps {
  src?: string
  icon?: React.ReactNode
  text?: string
  background?: string
}

const REGEX_CATCH_FIRST_LETTERS = /\b(\w)/g

const Avatar = ({ src, icon, text, background, ...props }: IAvatar) => {
  const showOnlyFirstLettersOnText = (text: string) => {
    const firstLettersCaptured: string[] | any = text.match(
      REGEX_CATCH_FIRST_LETTERS
    )
    return firstLettersCaptured.join('')
  }

  const renderContent = () => {
    if (!src && icon) return icon
    if (!src && text) return showOnlyFirstLettersOnText(text)
    if (src) return <Image width="40px" height="40px" src={src} alt="Avatar" />
  }

  return (
    <AvatarWrapper background={background} {...props}>
      {renderContent()}
    </AvatarWrapper>
  )
}

Avatar.defaultProps = {
  border: 'ROUNDED',
  fontWeight: 'BOLD',
  background: colorLight.neutral.three,
}

export default Avatar
