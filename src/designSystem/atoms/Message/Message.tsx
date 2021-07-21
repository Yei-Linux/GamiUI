import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { MessageWrapper } from './Message.styles'

export interface MessageProps extends IGeneralProps {
  /**
   * Message Text
   */
  text: string
  /**
   * Message Direction
   */
  direction: 'left' | 'right'
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
  color: string

  /**
   * Max Width
   */
  maxWidth: string
}

const Message = ({
  text,
  direction,
  background,
  hasMarker,
  color,
  maxWidth,
  ...args
}: MessageProps) => (
  <MessageWrapper
    color={color}
    maxWidth={maxWidth}
    background={background}
    hasMarker={hasMarker}
    direction={direction}
    {...args}
  >
    {text}
  </MessageWrapper>
)

Message.defaultProps = {
  text: 'Hola Bienvenido a nuestra app!',
  direction: 'left',
  background: '#7868e6',
  hasMarker: true,
  color: 'white',
  maxWidth: '250px',
}

export default Message
