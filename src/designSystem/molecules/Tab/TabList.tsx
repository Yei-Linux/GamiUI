import React from 'react'
import * as S from './Tab.styles'

export interface TabListProps {
  children: React.ReactNode
}

const TabList = ({ children }: TabListProps) => {
  return <S.TabList>{children}</S.TabList>
}

export default TabList
