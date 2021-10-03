import classNames from 'classnames'
import React from 'react'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Message.styles'
import { theme } from 'styles/tokens'

export type TDirection = 'left' | 'right'

export interface IMessage extends IGeneralProps {
  /**
   * Message Text
   */
  text: string
  /**
   * Message Direction
   */
  direction?: TDirection
  /**
   * Background
   */
  background: string
  /**
   * Has Marker
   */
  hasMarker?: boolean
  /**
   * Color
   */
  color?: string
  /**
   * Max Width
   */
  maxWidth?: string
}

const Message = ({
  text = 'Hi, Welcome to our app',
  direction = 'left',
  background,
  hasMarker = true,
  color,
  maxWidth = '250px',
  ...genericsProps
}: IMessage) => (
  <S.Message
    $direction={direction}
    $background={background || theme.light.primary.jordyBlue}
    $color={color || theme.light.neutral[800]}
    $maxWidth={maxWidth}
    className={classNames({
      marker: hasMarker,
      directionLeft: hasMarker && direction == 'left',
      directionRight: hasMarker && direction == 'right',
    })}
    {...getGenericPropStyles(genericsProps)}
  >
    {text}
  </S.Message>
)

export default Message
