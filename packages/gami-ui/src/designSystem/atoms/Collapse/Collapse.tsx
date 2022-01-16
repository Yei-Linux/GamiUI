import classNames from 'classnames'
import Menu from 'designSystem/molecules/Menu'
import useToggle from 'hooks/useToggle'
import React from 'react'
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
   * Subtitle Of Collapse
   */
  contentLeft?: React.ReactNode
  /**
   * Subtitle Of Collapse
   */
  icon?: React.ReactNode
  /**
   * Content Of Collapse
   */
  children: React.ReactNode
}

const Collapse = ({
  title,
  children,
  subtitle,
  contentLeft = <Icon name="bullet__item" />,
  icon,
}: ICollapse) => {
  const { isVisible, handleToggle } = useToggle({ defaultVisible: false })

  return (
    <S.Collapse>
      <S.Header>
        <Menu.SubMenu
          onClick={() => handleToggle(!isVisible)}
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
      <S.Children
        className={classNames({
          open: isVisible,
        })}
      >
        {children}
      </S.Children>
    </S.Collapse>
  )
}

export default Collapse
