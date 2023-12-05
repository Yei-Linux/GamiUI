import { IconNames } from 'core/domain/types'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'

export type TIcon = {
  /**
   * Fill Icon
   */
  color?: string
  /**
   * Name
   */
  name?: IconNames
  /**
   * Size icon
   */
  size?: string
}

type TDesignTokensIcons = Pick<
  TDesignTokens,
  'rounded' | 'shadow' | 'margin' | 'padding'
>

export type TIconComponent = TIcon &
  TDesignTokensIcons &
  TDesignUI &
  TComponentEvents<any, any>
