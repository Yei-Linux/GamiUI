import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import * as S from './Layout.styles'
import { Header } from './Header'
import { TLayout } from './type'
import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { Footer } from './Footer'
import { Wrapper } from './Wrapper'
import {
  deleteFragmentFromChildrens,
  makeGridMatrixString,
  makeGridTemplateAreaNames,
  validateHasSidebar,
} from './helper'

const Layout = ({
  className,
  children,
  width = '100%',
  height = '100%',
  minHeight = '100vh',
}: TLayout) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'layout',
    customPrexiCls: className,
  })

  const makeGridLayouts = () => {
    const templateAreaNames = makeGridTemplateAreaNames(childrenModified)
    const matrixString = makeGridMatrixString(templateAreaNames)
    return matrixString
  }

  const childrenModified = deleteFragmentFromChildrens(children)
  const gridTemplate = makeGridLayouts()
  const hasSidebar = validateHasSidebar(childrenModified)

  return (
    <S.LayoutStyled
      className={cls(handles.wrapper, className ?? '')}
      $width={width}
      $height={height}
      $minHeight={minHeight}
      $hasSidebar={hasSidebar}
      $gridTemplate={gridTemplate}
    >
      {childrenModified}
    </S.LayoutStyled>
  )
}

Layout.displayName = 'Layout'

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sidebar = Sidebar
Layout.Wrapper = Wrapper

export default Layout
