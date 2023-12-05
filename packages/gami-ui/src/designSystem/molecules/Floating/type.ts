import { IGenericEvents } from 'core/domain/interfaces/IGeneralProps'
import { FloatingTypes } from 'core/domain/types'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'

type IOnClose = () => void

type TGenericStylesFloating = Omit<
  TDesignTokens,
  | 'size'
  | 'fontWeight'
  | 'textAlign'
  | 'margin'
  | 'padding'
  | 'width'
  | 'height'
>

export type TFloating = {
  /**
   * Is visible or not floating
   */
  open?: boolean
  /**
   * Content
   */
  children: React.ReactNode
  /**
   * Floating direction
   */
  direction: FloatingTypes
  /**
   * Height
   */
  height?: string
  /**
   * Width
   */
  width?: string
  /**
   * Custom Icon
   */
  customCloseIcon?: React.ReactNode | null
  /**
   * Has Close Icon
   */
  hasCloseIcon?: boolean
  /**
   * ZIndex
   */
  zIndex?: number
  /**
   * Action on close floating message
   */
  onClose: IOnClose
}

export type TFloatingComponent = TFloating &
  TGenericStylesFloating &
  TDesignUI &
  IGenericEvents
