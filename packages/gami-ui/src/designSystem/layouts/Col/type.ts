import { ColSpacingTypes, ColTypes } from 'core/domain/types'
import { TDesignUI } from 'core/domain/types/design-system'

export type TCol = {
  /**
   * Children Prop
   */
  children: React.ReactNode
  /**
   * Spacing Prop
   */
  spacing?: ColSpacingTypes
  /**
   * Custom Spacing Prop
   */
  customSpacing?: string
  /**
   * Extra Small Size
   */
  xs?: ColTypes
  /**
   * Small Size
   */
  sm?: ColTypes
  /**
   * Medium Size
   */
  md?: ColTypes
  /**
   * Large Size
   */
  lg?: ColTypes
}

export type TColComponent = TCol & TDesignUI
