import React from 'react'
import * as S from './Avatar.styles'

export interface IAvatarGroup {
  children: React.ReactNode[]
  count?: number
}

const AvatarGroup = ({ children, count }: IAvatarGroup) => {
  return (
    <S.AvatarGroup>
      {children}
      {count && <S.Count>+{count}</S.Count>}
    </S.AvatarGroup>
  )
}

export default AvatarGroup
