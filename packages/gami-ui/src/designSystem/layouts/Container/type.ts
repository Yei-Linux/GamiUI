import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

export type TContainer = {
  /**
   * Container type
   */
  as?: keyof JSX.IntrinsicElements
  /**
   * Dangerous Inner HTML
   */
  dangerouslySetInnerHTML?: string
  /**
   * Content
   */
  children: React.ReactNode
}

export type TContainerComponent = TContainer & TDesignTokens & TDesignUI
