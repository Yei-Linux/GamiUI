import React from 'react'
import { colorLight } from '../../../styles/theme'
import Icon from '../../atoms/Icon'
import Link from '../../atoms/Link'
import { MenuWrapper, SubMenuWrapper } from './Menu.styles'

export interface IMenu {
  children: React.ReactNode
}

export interface ISubMenu {
  isOpen?: boolean
  icon: React.ReactNode
  title: string
  href: string
}

const SubMenu = ({ icon, title, href, isOpen }: ISubMenu) => {
  return (
    <SubMenuWrapper
      noBorder
      avatar={icon}
      title={
        <Link type={isOpen ? 'secondary' : 'text'} href={href} text={title} />
      }
    >
      <Icon
        fill={isOpen ? colorLight.primary.one : colorLight.neutral.two}
        name="arrowRight"
      />
    </SubMenuWrapper>
  )
}

const Menu = ({ children }: IMenu) => {
  return <MenuWrapper>{children}</MenuWrapper>
}

Menu.defaultProps = {}
Menu.SubMenu = SubMenu

export default Menu
