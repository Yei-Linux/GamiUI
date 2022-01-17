import classNames from 'classnames'
import React from 'react'
import * as S from './Layout.styles'

export interface ILayoutElement {
  /**
   * Children Prop
   */
  children: React.ReactNode
}

interface IHeader extends ILayoutElement {
  /**
   * Children Prop
   */
  isSticky?: boolean
}

export interface ILayout {
  /**
   * Children Prop
   */
  children: React.ReactNode[]
}

const Header = ({ children, isSticky = false }: IHeader) => {
  return (
    <S.Header className={classNames({ sticky: isSticky })}>{children}</S.Header>
  )
}

const Content = ({ children }: ILayoutElement) => {
  return <S.Content>{children}</S.Content>
}

const Sidebar = ({ children }: ILayoutElement) => {
  return <S.Sidebar>{children}</S.Sidebar>
}

const Footer = ({ children }: ILayoutElement) => {
  return <S.Footer>{children}</S.Footer>
}

const Layout = ({ children }: ILayout) => {
  const validateHasSidebar = () => {
    let isSidebarPresent = false
    React.Children.map(children, (child) => {
      const hasSidebarElement =
        React.isValidElement(child) && [Sidebar].includes(child.type as any)
      if (!isSidebarPresent) {
        isSidebarPresent = hasSidebarElement
      }
    })

    return isSidebarPresent
  }

  return <S.Layout $hasSidebar={validateHasSidebar()}>{children}</S.Layout>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sidebar = Sidebar

export default Layout
