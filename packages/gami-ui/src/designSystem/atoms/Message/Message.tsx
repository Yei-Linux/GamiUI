import React from 'react'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import * as S from './Message.styles'
import { defaultTheme } from 'styles/tokens'
import { DirectionMessageType } from 'core/domain/types'
import { cls } from 'core/utils/cls'
import useCssHandle from 'hooks/useCssHandle'
import withDefaults from 'hocs/WithDefault'

type TGenericStylesMessage = Omit<IGeneralProps, 'size' | 'rounded'>

export interface IMessage extends TGenericStylesMessage {
  /**
   * Message Text
   */
  text: string
  /**
   * Message Direction
   */
  direction?: DirectionMessageType
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
}: IMessage) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
    },
    componentPrefixCls: 'message',
    customPrexiCls: genericsProps?.className,
  })

  return (
    <S.Message
      $direction={direction}
      $background={background || defaultTheme.light.primary.jordyBlue}
      $color={color || defaultTheme.light.neutral[800]}
      $maxWidth={maxWidth}
      className={cls(handles.wrapper, genericsProps?.className ?? '', {
        marker: hasMarker,
        directionLeft: hasMarker && direction == 'left',
        directionRight: hasMarker && direction == 'right',
      })}
      {...getDesignProps(genericsProps)}
    >
      {text}
    </S.Message>
  )
}

const defaultProps = {}

Message.displayName = 'Message'

type MessageComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Message, defaultProps) as MessageComponent<IMessage>
