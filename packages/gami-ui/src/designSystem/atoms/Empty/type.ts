import { EmptyTypes } from 'core/domain/types'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

type TEmpty = {
  /**
   * Set Size of empty
   */
  size?: string

  /**
   * Set Empty Text
   */
  text?: string

  /**
   * Set Empty Icon Type
   */
  type?: EmptyTypes

  /**
   * Display Empty Text color
   */
  color?: string | null

  /**
   * Display Empty custom icon
   */
  icon?: React.ReactNode
}

export type TEmptyComponent = TEmpty &
  Omit<TDesignTokens, 'size' | 'textAlign' | 'height' | 'width' | 'rounded'> &
  TDesignUI
