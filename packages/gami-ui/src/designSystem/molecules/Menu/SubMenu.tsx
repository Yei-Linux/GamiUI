import React from 'react'
import * as S from './Menu.styles'

import Icon from 'designSystem/atoms/Icon'
import Link from 'designSystem/atoms/Link'
import RichText from 'designSystem/atoms/RichText'

export interface ISubMenu {
  onClick?: () => void
  isOpen?: boolean
  contentLeft?: React.ReactNode
  title: React.ReactNode
  subtitle?: React.ReactNode
  href?: string
  isExternal?: boolean
  isLink?: boolean
  icon?: React.ReactNode
  hasIcon?: boolean
}

const SubMenu = ({
  onClick,
  hasIcon = true,
  icon = <Icon size="20px" name="arrow__right" />,
  contentLeft,
  title,
  subtitle,
  href,
  isOpen,
  isLink = true,
  isExternal = false,
}: ISubMenu) => {
  const titleType = typeof title

  const getTitle = () => {
    if (titleType == 'string' && isLink && href) {
      return (
        <Link
          isExternal={isExternal}
          type={isOpen ? 'secondary' : 'text'}
          href={href}
          text={title as string}
        />
      )
    }

    if (titleType == 'string') {
      return <RichText text={title as string} />
    }

    return title
  }

  return (
    <S.SubMenu
      onClick={onClick}
      noBorder
      avatar={contentLeft}
      title={getTitle()}
      description={subtitle}
    >
      {hasIcon && icon}
    </S.SubMenu>
  )
}

export default SubMenu
