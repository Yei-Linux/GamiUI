import {
  AlignItemsTypes,
  DirectionTypes,
  JustifyContentTypes,
} from 'core/domain/types'
import { TDesignUI } from 'core/domain/types/design-system'

export type TRow = {
  /**
   * Gap
   */
  gap?: string | null
  /**
   * Width Row
   */
  width?: string

  /**
   * Children Prop
   */
  children: React.ReactNode

  /**
   * Justify Content
   */
  justifyContent?: JustifyContentTypes

  /**
   * Align Items
   */
  alignItems?: AlignItemsTypes

  /**
   * Height
   */
  height?: string

  /**
   * Is Wrap
   */
  isWrap?: boolean

  /**
   * Flex Direction
   */
  flexDirection?: DirectionTypes
}

export type TRowComponent = TRow & TDesignUI
