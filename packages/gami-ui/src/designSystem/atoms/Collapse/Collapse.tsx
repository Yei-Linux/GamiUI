import classNames from 'classnames'
import { TUseRefDiv } from 'core/domain/types'
import Menu from 'designSystem/molecules/Menu'
import useToggle from 'hooks/useToggle'
import React, { useEffect, useRef, useState } from 'react'
import Icon from '../Icon'
import * as S from './Collapse.styles'

export interface ICollapse {
  /**
   * Title Of Collapse
   */
  title: React.ReactNode
  /**
   * Subtitle Of Collapse
   */
  subtitle?: React.ReactNode
  /**
   * Content Left of Collapse Header
   */
  contentLeft?: React.ReactNode
  /**
   * Icon of Collapse Header
   */
  icon?: React.ReactNode
  /**
   * Content Of Collapse
   */
  children: React.ReactNode
  /**
   * Action on click header Collapse
   */
  onClick?: (isVisible: boolean) => void
}

const Collapse = ({
  title,
  children,
  subtitle,
  contentLeft = <Icon name="bullet__item" />,
  icon,
  onClick,
}: ICollapse) => {
  const childrenRef: TUseRefDiv = useRef(null)
  const [childrenHeight, setChildrenHeight] = useState('auto')
  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })

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
    <S.Collapse $height={childrenHeight}>
      <S.Header>
        <Menu.SubMenu
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
        className={classNames({
          open: isVisible,
        })}
      >
        <S.Children ref={childrenRef}>{children}</S.Children>
      </S.Content>
    </S.Collapse>
  )
}

export default Collapse
