import { cls } from 'core/utils/cls'
import Menu from 'designSystem/molecules/Menu'
import withDefaults from 'hocs/WithDefault'
import React, { useMemo } from 'react'
import Icon from '../Icon'
import * as S from './Collapse.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import useCollapseStore from 'hooks/store/useCollapseStore'
import CollapseGroup from './CollapseGroup'
import { TCollapseComponent } from './type'
import { useHeight } from './useHeight'
import { useToggleCollapse } from './useToggleCollapse'

const Collapse = ({
  title,
  children,
  variant = 'primary',
  bordered = false,
  subtitle,
  contentLeft,
  icon,
  onClick,
  expanded,
  index = null,
  ...genericsProps
}: TCollapseComponent) => {
  const { childrenHeight, childrenRef } = useHeight()
  const store = useCollapseStore()
  const globalStyles = useMemo(
    () => getGenericPropStyles(genericsProps),
    [genericsProps]
  )

  const hasDivider = useMemo(() => !!store && store?.divider, [store])
  const hasAccordion = useMemo(() => !!store && store?.accordion, [store])
  const { handleCollapse, isVisible } = useToggleCollapse({
    store,
    onClick,
    expanded,
    index,
    hasAccordion,
  })

  return (
    <S.CollapseStyled
      {...globalStyles}
      className={cls(genericsProps?.className ?? '', {
        divider: hasDivider,
      })}
      $customHeight={childrenHeight}
      $variant={variant}
      $bordered={bordered}
    >
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
        className={cls({
          open: isVisible,
        })}
      >
        <S.Children ref={childrenRef}>{children}</S.Children>
      </S.Content>
    </S.CollapseStyled>
  )
}

Collapse.Group = CollapseGroup

const defaultProps = {}

Collapse.displayName = 'Collapse'

type CollapseComponent<P> = React.NamedExoticComponent<P> & {
  Group: typeof CollapseGroup
  defaultProps: P
}

export default withDefaults(
  Collapse,
  defaultProps
) as CollapseComponent<TCollapseComponent>
