import { ImageBackgroundType } from 'core/domain/types'
import {
  TComponentEvents,
  TDesignTokens,
  TDesignUI,
} from 'core/domain/types/design-system'
import { IUseImage } from 'hooks/useImage'

type TImageLink = {
  url?: string
  newTab?: boolean
}
export type TImageLinkNul = TImageLink | null

export type TImagePropStyles = {
  /**
   * Max width Image
   */
  maxWidth?: string
  /**
   * Max Height Image
   */
  maxHeight?: string
  /**
   * Min Width Image
   */
  minWidth?: string
  /**
   * Min Height Image
   */
  minHeight?: string
  /**
   * Width Image
   */
  width?: string
  /**
   * Height Image
   */
  height?: string
}

export type TImage = TImagePropStyles & {
  /**
   * Children in case of Image Background
   */
  children?: React.ReactNode
  /**
   * Source Image
   */
  src: string
  /**
   * Alt Image
   */
  alt?: string
  /**
   * Link With Url and New Tab
   */
  link?: TImageLinkNul
  /**
   * Background Size In Case has children
   */
  backgroundSize?: ImageBackgroundType
}

export type TImageComponent = TImage &
  Omit<
    TDesignTokens,
    'width' | 'height' | 'textAlign' | 'fontWeight' | 'padding' | 'size'
  > &
  TDesignUI &
  Omit<TComponentEvents<any, any>, 'onChange'> &
  IUseImage
