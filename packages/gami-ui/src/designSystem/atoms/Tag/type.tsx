import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

export type TGroup = {
  children: React.ReactNode
  max?: number
  gap?: string
}

type TDesignTag = Omit<TDesignTokens, 'size'>

export type TTag = {
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

export type TTagComponent = TTag & TDesignTag & TDesignUI & IGenericEvents
