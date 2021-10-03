import React from 'react'
import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { GuidesNames } from 'core/domain/types'

import * as S from './GuideMessage.styles'
import AnimatorGuide from 'designSystem/atoms/AnimatorGuide'

import Message from 'designSystem/atoms/Message'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'

export interface GuideMessageProps extends IGeneralProps {
  /**
   * Guide Type
   */
  guideType: GuidesNames
  /**
   * Message Text
   */
  message: string
  /**
   * Message Direction
   */
  direction: 'left' | 'right'
  /**
   * Background
   */
  background: string
}

const GuideMessage = ({
  guideType = 'singer',
  message,
  direction = 'left',
  background = '#7868e6',
  ...genericsProps
}: GuideMessageProps) => (
  <S.GuideMessage
    $direction={direction}
    {...getGenericPropStyles(genericsProps)}
  >
    <AnimatorGuide type={guideType} />
    <Message
      style={{ marginTop: '15px' }}
      text={message}
      direction={direction}
      background={background}
    />
  </S.GuideMessage>
)

export default GuideMessage
