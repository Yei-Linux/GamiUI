import { IComponentsVariant } from 'core/domain/interfaces/IComponentsVariant'
import { LevelType } from 'core/domain/types'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'

export type TTitle = {
  /**
   * Level Title
   */
  level?: LevelType
  /**
   * Title Text Content
   */
  children: React.ReactNode
}

export type TTitleComponent = TTitle &
  TDesignTokens &
  TDesignUI &
  TComponentEvents<any, any> &
  IComponentsVariant
