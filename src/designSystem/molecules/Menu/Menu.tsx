import React from 'react'
import { MenuWrapper } from './Menu.styles'

export interface IMenu {
  prop?: any
}

const Menu = ({ prop }: IMenu) => {
  return <MenuWrapper />
}

Menu.defaultProps = {}

export default Menu
