import React from 'react'
import * as S from './Menu.styles'
import SubMenu from './SubMenu'

export interface IMenu {
  children: React.ReactNode
}

const Menu = ({ children }: IMenu) => {
  return <S.Menu>{children}</S.Menu>
}

Menu.SubMenu = SubMenu

export default Menu
