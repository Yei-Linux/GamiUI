import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'
import React, { Fragment } from 'react'
import * as S from './Layout.styles'

export interface ILayoutElement {
  /**
   * Children Prop
   */
  style?: React.CSSProperties
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
  className: string
  /**
   * Children Prop
   */
  children: React.ReactNode[]
  /**
   * Children Prop
   */
  width: string
  /**
   * Children Prop
   */
  height: string
  /**
   * Children Prop
   */
  minHeight: string
}

const Header = ({ children, isSticky = false, style }: IHeader) => {
  return (
    <S.Header style={style} className={cls({ sticky: isSticky })}>
      {children}
    </S.Header>
  )
}

const Content = ({ children, style }: ILayoutElement) => {
  return <S.Content style={style}>{children}</S.Content>
}

const Sidebar = ({ children, style }: ILayoutElement) => {
  return <S.Sidebar style={style}>{children}</S.Sidebar>
}

const Footer = ({ children, style }: ILayoutElement) => {
  return <S.Footer style={style}>{children}</S.Footer>
}

const Layout = ({
  className,
  children,
  width = '100%',
  height = '100%',
  minHeight = '100vh',
}: ILayout) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'layout',
    customPrexiCls: className,
  })

  const deleteFragmentFromChildrens = (children: React.ReactNode[]) => {
    let childrenModified = children

    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement(child) &&
        [Fragment].includes(child.type as any) &&
        child.props?.children
      ) {
        childrenModified = child.props.children
      }
    })

    return childrenModified
  }

  const childrenModified = deleteFragmentFromChildrens(children)

  const validateHasSidebar = (childrenModified: React.ReactNode[]) => {
    let isSidebarPresent = false

    React.Children.map(childrenModified, (child) => {
      const hasSidebarElement =
        React.isValidElement(child) && [Sidebar].includes(child.type as any)
      if (!isSidebarPresent) {
        isSidebarPresent = hasSidebarElement
      }
    })

    return isSidebarPresent
  }

  return (
    <S.Layout
      className={cls(handles.handles)}
      $width={width}
      $height={height}
      $minHeight={minHeight}
      $hasSidebar={validateHasSidebar(childrenModified)}
    >
      {childrenModified}
    </S.Layout>
  )
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sidebar = Sidebar

export default Layout
