import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'

type TCollapseAction = (isVisible: boolean) => void

type TComponentVariantCollapse = Omit<
  IComponentsVariant,
  'flat' | 'ghost' | 'light'
>
type TDesignTokensCollapse = Omit<
  TDesignTokens,
  'size' | 'fontWeight' | 'textAlign' | 'height' | 'width'
>

export type TCollapse = {
  /**
   * 	Display title collapse
   */
  title: React.ReactNode
  /**
   * Display subtitle collapse
   */
  subtitle?: React.ReactNode
  /**
   * Display content Left of Collapse Header
   */
  contentLeft?: React.ReactNode
  /**
   * Display icon of Collapse Header
   */
  icon?: React.ReactNode
  /**
   * Display content Of Collapse
   */
  children: React.ReactNode
  /**
   * Set default visible
   */
  expanded?: boolean
  /**
   * Identifier
   */
  index?: number | null
}

export type TCollapseComponent = TCollapse &
  TDesignTokensCollapse &
  TDesignUI &
  TComponentEvents<TCollapseAction, any> &
  TComponentVariantCollapse
