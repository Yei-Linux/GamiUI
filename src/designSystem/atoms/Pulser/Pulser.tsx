import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import { colorLight } from '../../../styles/theme'
import Icon from '../Icon'
import {
  Pulse,
  PulseContainer,
  PulseLock,
  PulseProgress,
  PulseTransitions,
  PulseWrapper,
} from './Pulser.styles'

interface IPulser extends IGeneralProps {
  /**
   * Content Pulser
   */
  children: React.ReactNode
  /**
   * Is active Pulser
   */
  isActive?: boolean
  /**
   * Is bloqued Pulser
   */
  isBloqued?: boolean
  /**
   * Border Pulser
   */
  borderColor: string
  /**
   * Progress Text
   */
  progressText: string
  /**
   * Background color
   */
  backgroundColor?: string
}

const Pulser = ({
  children,
  isActive,
  isBloqued,
  borderColor,
  progressText,
  backgroundColor,
  style,
  ...args
}: IPulser) => {
  return (
    <Pulse style={style}>
      <PulseWrapper>
        {isActive && <PulseTransitions type="one" />}
        {isActive && <PulseTransitions type="two" />}

        <PulseContainer
          {...args}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          isBloqued={isBloqued}
        >
          {children}
        </PulseContainer>

        {isBloqued && (
          <PulseLock>
            <Icon fill="" size="30px" name="upset" />
          </PulseLock>
        )}
      </PulseWrapper>
      <PulseProgress>{progressText}</PulseProgress>
    </Pulse>
  )
}

Pulser.defaultProps = {
  isActive: false,
  isBloqued: false,
  borderColor: colorLight.primary.one,
  backgroundColor: colorLight.neutral.nine,
  shadow: 'LARGE',
  progress: '100%',
}

export default Pulser
