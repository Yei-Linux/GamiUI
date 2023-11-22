import React from 'react'
import * as S from '../SocialNetworks.styles'

export interface IShareButton {
  children: React.ReactNode
  className?: string
  link: string
}

export const ShareButton = ({ children, className, link }: IShareButton) => {
  const windowsOpen = () => {
    const isSSr = typeof window === undefined

    if (isSSr) return

    window.open(link, '_blank')
  }

  return (
    <S.ShareButton className={className} onClick={windowsOpen}>
      {children}
    </S.ShareButton>
  )
}
