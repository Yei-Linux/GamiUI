import React from 'react'
import * as S from './Tab.styles'

export interface TabContentProps {
  children: React.ReactNode
}

const TabContent = ({ children }: TabContentProps) => {
  return <S.TabContent>{children}</S.TabContent>
}

export default TabContent
