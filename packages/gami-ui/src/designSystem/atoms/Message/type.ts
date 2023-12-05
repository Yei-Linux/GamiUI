import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { DirectionMessageType } from 'core/domain/types'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

type TDesignMessage = Omit<TDesignTokens, 'size' | 'rounded'>

export type TMessage = {
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

export type TMessageComponent = TMessage &
  TDesignMessage &
  TDesignUI &
  IGenericEvents
