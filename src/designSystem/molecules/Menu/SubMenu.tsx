import React from 'react'
import * as S from './Menu.styles'

import Icon from 'designSystem/atoms/Icon'
import Link from 'designSystem/atoms/Link'
import { theme } from 'styles/tokens'

export interface ISubMenu {
  isOpen?: boolean
  icon: React.ReactNode
  title: string
  href: string
  isExternal?: boolean
}

const SubMenu = ({
  icon,
  title,
  href,
  isOpen,
  isExternal = false,
}: ISubMenu) => {
  return (
    <S.SubMenu
      noBorder
      avatar={icon}
      title={
        <Link
          isExternal={isExternal}
          type={isOpen ? 'secondary' : 'text'}
          href={href}
          text={title}
        />
      }
    >
      <Icon
        fill={isOpen ? theme.light.primary.jordyBlue : theme.light.neutral[100]}
        name="arrowRight"
      />
    </S.SubMenu>
  )
}

export default SubMenu
