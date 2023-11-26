import { ComponentThemeType } from 'core/domain/types'

export interface IComponentsVariant {
  /**
   * Display theme variants
   */
  variant?: ComponentThemeType
  /**
   * Set bordered or not
   */
  bordered?: boolean
  /**
   * Set ghost or not
   */
  ghost?: boolean
  /**
   * Set flat or not
   */
  flat?: boolean
  /**
   * Set light or not
   */
  light?: boolean
}

