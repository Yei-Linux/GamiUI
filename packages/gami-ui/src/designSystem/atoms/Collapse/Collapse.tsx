import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { TUseRefDiv } from 'core/domain/types'
import { cls } from 'core/utils/cls'
import Menu from 'designSystem/molecules/Menu'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import useToggle from 'hooks/useToggle'
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import * as S from './Collapse.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

type TCollapseAction = (isVisible: boolean) => void

type TComponentVariantCollapse = Omit<
  IComponentsVariant,
  'flat' | 'ghost' | 'light'
>
type TGenericStylesCollapse = Omit<
  IGeneralProps<TCollapseAction>,
  'size' | 'fontWeight' | 'textAlign' | 'height' | 'width'
>
export interface ICollapse
  extends TComponentVariantCollapse,
    TGenericStylesCollapse {
  /**
   * 	Display title collapse
   */
  title: React.ReactNode
  /**
   * Display subtitle collapse
   */
  subtitle?: React.ReactNode
  /**
   * Display content Left of Collapse Header
   */
  contentLeft?: React.ReactNode
  /**
   * Display icon of Collapse Header
   */
  icon?: React.ReactNode
  /**
   * Display content Of Collapse
   */
  children: React.ReactNode
  /**
   * Set default visible
   */
  expanded?: boolean
}

const Collapse = ({
  title,
  children,
  subtitle,
  contentLeft,
  icon,
  onClick,
  className,
  expanded,
  ...genericsProps
}: ICollapse) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      header: ['header'],
      submenu: ['submenu'],
      content: ['content'],
      children__content: ['children__content'],
    },
    componentPrefixCls: 'collapse',
    customPrexiCls: className,
  })

  const childrenRef: TUseRefDiv = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState('auto')
  const { isVisible, handleToggle } = useToggle({ defaultVisible: expanded })

  const getChildrenHeight = () => {
    if (!childrenRef) return 'auto'

    const childrenHeight = childrenRef.current?.getBoundingClientRect()

    if (!childrenHeight) return 'auto'

    return `${childrenHeight.height}px`
  }

  const handleActionOnCollapse = () => {
    onClick?.(!isVisible)
    handleToggle(!isVisible)
  }

  useEffect(() => {
    const childrenHeightResult = getChildrenHeight()
    setChildrenHeight(childrenHeightResult)
  }, [])

  const handleCollapse = () => {
    handleActionOnCollapse()
  }

  return (
    <S.Collapse
      {...getGenericPropStyles(genericsProps)}
      className={cls(handles.wrapper)}
      $height={childrenHeight}
    >
      <S.Header className={cls(handles.header)}>
        <Menu.SubMenu
          className={cls(handles.submenu)}
          onClick={handleCollapse}
          isOpen
          title={title}
          subtitle={subtitle}
          contentLeft={contentLeft}
          icon={
            icon ?? (
              <Icon
                size="20px"
                name={isVisible ? 'arrow__right' : 'arrow__right'}
              />
            )
          }
        />
      </S.Header>
      <S.Content
        className={cls(handles.content, {
          open: isVisible,
        })}
      >
        <S.Children
          className={cls(handles.children__content)}
          ref={childrenRef}
        >
          {children}
        </S.Children>
      </S.Content>
    </S.Collapse>
  )
}

const defaultProps = {}

type CollapseComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Collapse,
  defaultProps
) as CollapseComponent<ICollapse>
