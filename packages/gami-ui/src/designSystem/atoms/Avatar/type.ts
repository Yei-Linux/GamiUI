import { ZoomModeType, TextModeType } from 'core/domain/types'
import { TDesignTokens, TDesignUI } from 'core/domain/types/design-system'
import { IUseImage } from 'hooks/useImage'

export type TAvatar = {
  /**
   * Image source
   */
  src?: string
  /**
   * Show icon in avatar
   */
  icon?: React.ReactNode
  /**
   * 	Display text when image is missing
   */
  text?: string
  /**
   * 	Display altText in avatar
   */
  alt?: string
  /**
   * Change avatar background
   */
  background?: string
  /**
   * Change avatar text color
   */
  textColor?: string
  /**
   * Change avatar border color
   */
  borderColor?: string
  /**
   * Display avatar zoom
   */
  zoomMode?: ZoomModeType
  /**
   * Display avatar text mode
   */
  textMode?: TextModeType
}

export type TAvatarComponent = TAvatar & TDesignTokens & TDesignUI & IUseImage
