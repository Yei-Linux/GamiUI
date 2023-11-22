import { EmptyTypes } from 'core/domain/types'
import React from 'react'
import Row from 'designSystem/layouts/Row'
import Icon from '../Icon'
import { iconsEmpty } from './constants'
import * as S from './Empty.styles'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { getDesignProps } from 'styles/utilities/genericPropStyles'

type TGenericStylesEmpty = Omit<
  IGeneralProps,
  'size' | 'textAlign' | 'height' | 'width' | 'rounded'
>

export interface IEmpty extends TGenericStylesEmpty {
  /**
   * Set Size of empty
   */
  size?: string

  /**
   * Set Empty Text
   */
  text?: string

  /**
   * Set Empty Icon Type
   */
  type?: EmptyTypes

  /**
   * Display Empty Text color
   */
  color?: string | null

  /**
   * Display Empty custom icon
   */
  icon?: React.ReactNode
}

const Empty = ({
  size = '150px',
  text,
  type = 'base',
  color = null,
  icon,
  ...genericsProps
}: IEmpty) => {
  const { handles } = useCssHandle({
    classes: {
      icon__wrapper: ['icon__wrapper'],
      icon: ['icon'],
      text__wrapper: ['text__wrapper'],
      text: ['text'],
    },
    componentPrefixCls: 'empty',
    customPrexiCls: genericsProps?.className,
  })

  return (
    <S.Empty {...getDesignProps(genericsProps)}>
      <Row
        className={cls(handles.icon__wrapper, genericsProps?.className ?? '')}
      >
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
          <S.Text className={cls(handles.text)} $color={color} text={text} />
        </Row>
      )}
    </S.Empty>
  )
}

const defaultProps = {}

Empty.displayName = 'Empty'

type EmptyComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Empty, defaultProps) as EmptyComponent<IEmpty>
