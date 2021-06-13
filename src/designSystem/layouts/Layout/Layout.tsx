import React from 'react'
import { ContentWrapper, FooterWrapper, HeaderWrapper, LayoutWrapper } from './Layout.styles'

export interface IHeader {
  children: React.ReactNode
}

export interface ILayout {
  children: React.ReactNode
}

const Header = ({children}: IHeader) => {
  return <HeaderWrapper>{children}</HeaderWrapper>
}

const Content = ({children}: IHeader) => {
  return <ContentWrapper>{children}</ContentWrapper>
}


const Footer = ({children}: IHeader) => {
  return <FooterWrapper>{children}</FooterWrapper>
}

const Layout = ({ children }: ILayout) => {
  return <LayoutWrapper>{ children }</LayoutWrapper>
}

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer

Layout.defaultProps = {}

export default Layout
