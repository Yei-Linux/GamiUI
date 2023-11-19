import React from 'react'
import * as S from './Avatar.styles'

export interface IAvatarGroup {
  children: React.ReactNode[]
  count?: number
}

const AvatarGroup = ({ children, count }: IAvatarGroup) => {
  return (
    <S.AvatarGroupStyled>
      {children}
      {count && <S.CountStyled>+{count}</S.CountStyled>}
    </S.AvatarGroupStyled>
  )
}

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup
