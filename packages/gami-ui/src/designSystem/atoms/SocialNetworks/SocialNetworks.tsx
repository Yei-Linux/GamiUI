import React from 'react'
import { Whatsapp } from './apps/Whatsapp'
import { Instagram } from './apps/Instagram'
import * as S from './SocialNetworks.styles'
import { Facebook } from './apps/Facebook'
import { Tiktok } from './apps/Tiktok'

export interface ISocialNetworks {
  /**
   * Prop Of SocialNetworks
   */
  children?: React.ReactNode
}

const SocialNetworks = ({ children }: ISocialNetworks) => {
  return <S.SocialNetworks>{children}</S.SocialNetworks>
}

SocialNetworks.Whatsapp = Whatsapp
SocialNetworks.Instagram = Instagram
SocialNetworks.Facebook = Facebook
SocialNetworks.Tiktok = Tiktok

export default SocialNetworks
