import { TDesignUI } from 'core/domain/types/design-system'

export type TDirection = 'left' | 'right' | 'top' | 'bottom'

export type TSize = 1 | 2 | 3 | 4 | 5

export type TSpacer = {
  /**
   * Spacer Direction
   */
  direction: TDirection
  /**
   * Size of spacer
   */
  size?: TSize
  /**
   * Custom Size
   */
  customSize?: string
} & TDesignUI
