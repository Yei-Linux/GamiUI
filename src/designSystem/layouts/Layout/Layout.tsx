import React from 'react'
import * as S from './Layout.styles'

export interface ILayoutElement {
  /**
   * Children Prop
   */
  children: React.ReactNode
}

export interface ILayout {
  /**
   * Children Prop
   */
  children: React.ReactNode
}

const Header = ({ children }: ILayoutElement) => {
  return <S.Header>{children}</S.Header>
}

const Content = ({ children }: ILayoutElement) => {
  return <S.Content>{children}</S.Content>
}

const Footer = ({ children }: ILayoutElement) => {
  return <S.Footer>{children}</S.Footer>
}

const Layout = ({ children }: ILayout) => {
  return <S.Layout>{children}</S.Layout>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

export default Layout
