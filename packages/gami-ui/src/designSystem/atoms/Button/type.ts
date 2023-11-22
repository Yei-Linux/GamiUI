import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import { ButtonHtmlType } from 'core/domain/types'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'

export type TButton = {
  /**
   * 	Display button content
   */
  children: React.ReactNode
  /**
   * 	Display prefix Content button
   */
  preffix?: React.ReactNode
  /**
   * Set html button types
   */
  type?: ButtonHtmlType
  /**
   * Display theme button variants
   */
  disable?: boolean
}

export type TButtonComponent = TButton &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any> &
  IComponentsVariant
