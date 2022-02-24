import React, { Fragment } from 'react'
import * as S from './Menu.styles'

import Icon from 'designSystem/atoms/Icon'
import Link from 'designSystem/atoms/Link'
import RichText from 'designSystem/atoms/RichText'
import Collapse from 'designSystem/atoms/Collapse'

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
  children?: React.ReactNode
  className?: string
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
  children,
  className,
}: ISubMenu) => {
  const titleType = typeof title

  const getTitle = () => {
    if (titleType == 'string' && isLink && href) {
      return (
        <Link
          isExternal={isExternal}
          variant={isOpen ? 'secondary' : 'primary'}
          light
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
    <Fragment>
      {children ? (
        <Collapse
          className={className}
          contentLeft={contentLeft}
          icon={icon}
          title={getTitle()}
          subtitle={subtitle}
        >
          {children}
        </Collapse>
      ) : (
        <S.SubMenu
          className={className}
          onClick={onClick}
          noBorder
          avatar={contentLeft}
          title={getTitle()}
          description={subtitle}
        >
          {hasIcon && icon}
        </S.SubMenu>
      )}
    </Fragment>
  )
}

export default SubMenu
