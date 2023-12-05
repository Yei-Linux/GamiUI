import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { ProgressType } from 'core/domain/types'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

export type TProgressTypeContent = {
  className?: string[] | string
  percent: number
  backgroundProgress: string
}

type TProgressDesign = Omit<
  TDesignTokens,
  | 'height'
  | 'textAlign'
  | 'fontWeight'
  | 'padding'
  | 'size'
  | 'onChange'
  | 'rounded'
>

export type TProgress = {
  /**
   * Background of container
   */
  backgroundProgressBar?: string
  /**
   * Background of progress
   */
  backgroundProgress?: string
  /**
   * Percent Number
   */
  percent: number
  /**
   * Progress Type
   */
  type?: ProgressType
  /**
   * Max Width
   */
  maxWidth?: string
  /**
   * Max Height
   */
  maxHeight?: string
}

export type TProgressComponent = TProgress &
  TProgressDesign &
  TDesignUI &
  IGenericEvents
