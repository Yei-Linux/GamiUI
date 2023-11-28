import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import React from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { Group } from './Group'
import * as S from './Tag.styles'
import { TTagComponent } from './type'

const Tag = ({
  text,
  color,
  background,
  ballMarkerColor,
  ...genericsProps
}: TTagComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'tag',
    customPrexiCls: '',
  })

  return (
    <S.TagStyled
      className={cls(handles.wrapper, genericsProps?.className ?? '')}
      $background={background}
      $color={color}
      {...getDesignProps(genericsProps)}
    >
      {ballMarkerColor != '' && ballMarkerColor && (
        <S.BallMarkerStyled $background={ballMarkerColor} />
      )}
      {text}
    </S.TagStyled>
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

export default withDefaults(Tag, defaultProps) as TagComponent<TTagComponent>
