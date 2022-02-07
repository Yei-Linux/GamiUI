import useImage, { IUseImage } from 'hooks/useImage'
import React, { CSSProperties, Fragment } from 'react'
import { BackgroundImg, Img } from './Image.styles'

interface IImageLink {
  url?: string
  newTab?: boolean
}

export interface IImagePropStyles {
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

export interface IImage extends IImagePropStyles, IUseImage {
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
  link?: IImageLink | null
  /**
   * Background Size In Case has children
   */
  backgroundSize?: 'cover' | 'contain'

  className?: string
  style?: CSSProperties
}

const Image = ({
  children = null,
  src,
  alt = '',
  maxWidth = '',
  maxHeight = '',
  minWidth = '',
  minHeight = '',
  width = 'auto',
  height = 'auto',
  link = null,
  className,
  backgroundSize = 'contain',
  style,
  sets,
  breakpoints,
}: IImage) => {
  const { setsImg, breakpointsImg } = useImage({ sets, breakpoints })
  const optimizationImgSizes = {
    srcset: setsImg,
    sizes: breakpointsImg,
  }

  const imageCommonsProps = {
    src,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
    backgroundSize,
    style,
    ...optimizationImgSizes,
  }
  const ImageClassName = link ? {} : { className }
  const ImageLinkClassName = link ? { className } : {}

  const shouldOpenLinkInNewTab = link?.newTab

  const imageElement = children ? (
    <BackgroundImg {...ImageClassName} {...imageCommonsProps}>
      {children}
    </BackgroundImg>
  ) : (
    <Img {...ImageClassName} {...imageCommonsProps} alt={alt} loading="lazy" />
  )

  const maybeLink = link ? (
    <a
      {...ImageLinkClassName}
      href={link?.url}
      target={shouldOpenLinkInNewTab ? '_blank' : undefined}
      rel="noreferrer"
    >
      {imageElement}
    </a>
  ) : (
    <Fragment>{imageElement}</Fragment>
  )

  return <Fragment>{maybeLink}</Fragment>
}

export default Image
