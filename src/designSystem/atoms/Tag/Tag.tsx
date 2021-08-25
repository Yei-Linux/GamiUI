import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import * as S from './Tag.styles'

export interface ITag extends IGeneralProps {
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
  return (
    <S.Tag
      $background={background}
      $color={color}
      {...getGenericPropStyles(genericsProps)}
    >
      {ballMarkerColor != '' && <S.BallMarker $background={ballMarkerColor} />}
      {text}
    </S.Tag>
  )
}

export default Tag
