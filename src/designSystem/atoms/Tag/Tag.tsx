import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { colorLight } from '../../../styles/theme'
import { BallMarker, TagWrapper } from './Tag.styles'

export interface ITag extends IGeneralProps {
  text: string
  color?: string
  background?: string
  ballMarkerColor?: string
}

const Tag = ({ text, color, background, ballMarkerColor, ...props }: ITag) => {
  return (
    <TagWrapper background={background} color={color} {...props}>
      {ballMarkerColor != '' && <BallMarker background={ballMarkerColor} />}
      {text}
    </TagWrapper>
  )
}

Tag.defaultProps = {
  background: colorLight.neutral.six,
  ballMarkerColor: '',
  color: colorLight.neutral.four,
  border: 'ROUNDED',
  fontWeight: 'BOLD',
}

export default Tag
