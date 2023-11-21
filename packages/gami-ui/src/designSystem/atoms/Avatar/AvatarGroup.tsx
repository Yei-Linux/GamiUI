import React from 'react'
import * as S from './Avatar.styles'

export interface IAvatarGroup {
  children: React.ReactNode[]
  count?: number
  counterBackground?: string
}

const AvatarGroup = ({
  children,
  count,
  counterBackground,
}: IAvatarGroup) => {
  return (
    <S.AvatarGroupStyled>
      {children}
      {count && (
        <S.CountStyled $background={counterBackground}>+{count}</S.CountStyled>
      )}
    </S.AvatarGroupStyled>
  )
}

AvatarGroup.displayName = 'AvatarGroup'

export default AvatarGroup
