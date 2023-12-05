import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import {
  TDesignTokens,
  TDesignUI,
  TComponentEvents,
} from 'core/domain/types/design-system'

export type TLink = {
  /**
   * Children Content
   */
  children?: React.ReactNode
  /**
   * Text Link
   */
  text?: string | null
  /**
   * Url
   */
  href: string

  /**
   * Is External
   */
  isExternal?: boolean
}

export type TLinkComponent = TLink &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any> &
  IComponentsVariant
