import React, { useMemo } from 'react'
import Row from 'designSystem/layouts/Row'
import Icon from '../Icon'
import { iconsEmpty } from './constants'
import * as S from './Empty.styles'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { TEmptyComponent } from './type'

const Empty = ({
  size = '150px',
  text,
  type = 'base',
  color = null,
  icon,
  ...genericsProps
}: TEmptyComponent) => {
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      icon__wrapper: ['icon__wrapper'],
      icon: ['icon'],
      text__wrapper: ['text__wrapper'],
      text: ['text'],
    },
    componentPrefixCls: 'empty',
    customPrexiCls: genericsProps?.className,
  })

  return (
    <S.EmptyStyled {...globalStyles} className={cls(handles.wrapper)}>
      <Row className={cls(handles.icon__wrapper)}>
        {icon ?? (
          <Icon
            className={cls(handles.icon)}
            name={iconsEmpty[type]}
            size={size}
          />
        )}
      </Row>
      {text && (
        <Row className={cls(handles.text__wrapper)}>
          <S.TextStyled
            className={cls(handles.text)}
            $color={color}
            text={text}
          />
        </Row>
      )}
    </S.EmptyStyled>
  )
}

const defaultProps = {}

Empty.displayName = 'Empty'

type EmptyComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Empty,
  defaultProps
) as EmptyComponent<TEmptyComponent>
