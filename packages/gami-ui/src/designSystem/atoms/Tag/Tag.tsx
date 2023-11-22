import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { Group } from './Group'
import * as S from './Tag.styles'

type TGenericStylesTag = Omit<IGeneralProps, 'size'>

export interface ITag extends TGenericStylesTag {
  /**
   * Text on tag
   */
  text: string
  /**
   * Color on tag
   */
  color?: string
  /**
   * Background on tag
   */
  background?: string
  /**
   * Ball Marker Color
   */
  ballMarkerColor?: string
}

const Tag = ({
  text,
  color,
  background,
  ballMarkerColor,
  ...genericsProps
}: ITag) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'tag',
    customPrexiCls: genericsProps?.className,
  })

  return (
    <S.Tag
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      $background={background}
      $color={color}
      {...getDesignProps(genericsProps)}
    >
      {ballMarkerColor != '' && ballMarkerColor && (
        <S.BallMarker $background={ballMarkerColor} />
      )}
      {text}
    </S.Tag>
  )
}

const defaultProps = {
  shadow: 'sm',
  rounded: 'lg',
}

Tag.Group = Group
Tag.displayName = 'Tag'

type TagComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
  Group: typeof Group
}

export default withDefaults(Tag, defaultProps) as TagComponent<ITag>
