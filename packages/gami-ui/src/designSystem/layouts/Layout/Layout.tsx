import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'
import React, { Fragment } from 'react'
import * as S from './Layout.styles'

export type TLayout = 'header' | 'main' | 'sidebar' | 'footer' | 'wrapper'

export interface ILayoutElement {
  /**
   * Children Prop
   */
  style?: React.CSSProperties
  /**
   * Children Prop
   */
  children: React.ReactNode
  /**
   * className Prop
   */
  className?: string
}

interface IHeader extends ILayoutElement {
  /**
   * Children Prop
   */
  isSticky?: boolean
}

export interface ILayout {
  /**
   * className Prop
   */
  className?: string
  /**
   * Children Prop
   */
  children: React.ReactNode[]
  /**
   * width Prop
   */
  width?: string
  /**
   * height Prop
   */
  height?: string
  /**
   * minHeight Prop
   */
  minHeight?: string
}

const Header = ({
  children,
  isSticky = false,
  style,
  className = '',
  onClick,
  onMouseEnter,
  onMouseLeave,
}: IHeader & IGenericEvents) => {
  return (
    <S.Header
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={style}
      className={cls(className, { sticky: isSticky })}
    >
      {children}
    </S.Header>
  )
}

const Content = ({
  children,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ILayoutElement & IGenericEvents) => {
  return (
    <S.Content
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </S.Content>
  )
}

const Sidebar = ({
  children,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ILayoutElement & IGenericEvents) => {
  return (
    <S.Sidebar
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </S.Sidebar>
  )
}

const Footer = ({
  children,
  style,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ILayoutElement & IGenericEvents) => {
  return (
    <S.Footer
      style={style}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </S.Footer>
  )
}

const Wrapper = ({ children }: ILayoutElement) => {
  return <Fragment>{children}</Fragment>
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

  const getLayoutAreaName = (child: React.ReactNode): TLayout | null => {
    if (!React.isValidElement(child)) return null
    const type = (child.type as any)?.__emotion_base ?? child.type

    if (type === Sidebar) return 'sidebar'
    if (type === Header) return 'header'
    if (type === Content) return 'main'
    if (type === Footer) return 'footer'
    if (type === Wrapper) return 'wrapper'

    return null
  }

  const makeGridTemplateAreaNames = (children: React.ReactNode) => {
    const gridTemplateAreas: Array<TLayout | TLayout[]> = []
    React.Children.map(children, (child) => {
      const areaName = getLayoutAreaName(child)
      if (!areaName) return

      if (areaName === 'wrapper') {
        const childValid = React.isValidElement(child)
        if (!childValid) return null

        const childrenAreaNames: any = makeGridTemplateAreaNames(
          child.props.children
        )
        gridTemplateAreas.push(childrenAreaNames)
        return
      }

      gridTemplateAreas.push(areaName)
      return
    })

    return gridTemplateAreas
  }

  //TODO: Add feature related with sizes and dimensions
  const makeGridMatrixString = (
    templateAreaNames: Array<TLayout | TLayout[]>
  ) => {
    const rows = templateAreaNames.length
    const maxColSize = templateAreaNames.reduce((acc, item) => {
      const isArray = Array.isArray(item)

      if (!isArray) return acc

      return item.length > acc ? item.length : acc
    }, 1)
    const cols = maxColSize < 3 ? 3 : maxColSize
    let hasSide = false

    let matrixString = ''

    for (let i = 0; i < rows; i++) {
      const item = templateAreaNames[i]
      const itemIsStr = !Array.isArray(item)

      const block: TLayout[] = []

      for (let j = 0; j < cols; j++) {
        if (itemIsStr) {
          block.push(item)
          continue
        }

        const subItem = item[j]
        block.push(`${subItem ?? item.at(-1)}`)
      }

      const isNotMain = block.includes('header') || block.includes('footer')
      if (!hasSide) {
        hasSide = block.includes('sidebar')
      }

      const blockString = block.join(' ')
      const rowString = `'${blockString}' ${
        isNotMain ? 'minmax(min-content, max-content)' : 'auto'
      }`

      matrixString += `${rowString} `
    }

    if (hasSide) {
      matrixString += ` / auto ${Array.from({ length: cols - 1 }, (_, i) => i)
        .map(() => '1fr')
        .join(' ')}`
    }

    return matrixString
  }

  const makeGridLayouts = () => {
    const templateAreaNames = makeGridTemplateAreaNames(childrenModified)
    const matrixString = makeGridMatrixString(templateAreaNames)
    return matrixString
  }

  const gridTemplate = makeGridLayouts()

  return (
    <S.Layout
      className={cls(handles.wrapper, className ?? '')}
      $width={width}
      $height={height}
      $minHeight={minHeight}
      $hasSidebar={validateHasSidebar(childrenModified)}
      $gridTemplate={gridTemplate}
    >
      {childrenModified}
    </S.Layout>
  )
}

Layout.displayName = 'Layout'
Content.displayName = 'Content'
Footer.displayName = 'Footer'
Sidebar.displayName = 'Sidebar'
Wrapper.displayName = 'Layout'

Layout.Header = Header
Layout.Content = Content
Layout.Footer = Footer
Layout.Sidebar = Sidebar
Layout.Wrapper = Wrapper

export default Layout
