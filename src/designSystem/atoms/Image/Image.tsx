import React, { CSSProperties, Fragment } from 'react'
import { BackgroundImg, Img } from './Image.styles'

interface ImageLink {
  url?: string
  newTab?: boolean
}

export interface ImageProps {
  children?: React.ReactNode
  src: string
  alt?: string
  maxWidth?: string
  maxHeight?: string
  minWidth?: string
  minHeight?: string
  width?: string
  height?: string
  link?: ImageLink | null
  className?: string
  backgroundSize?: 'cover' | 'contain'
  style?: CSSProperties
}

const Image = ({
  children,
  src,
  alt,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  width,
  height,
  link,
  className,
  backgroundSize,
  style,
}: ImageProps) => {
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
  }
  const ImageClassName = link ? {} : { className }
  const ImageLinkClassName = link ? { className } : {}
  const shouldOpenLinkInNewTab = link?.newTab
  const imageElement = children ? (
    <BackgroundImg {...ImageClassName} {...imageCommonsProps}>
      {children}
    </BackgroundImg>
  ) : (
    <Img {...ImageClassName} {...imageCommonsProps} alt={alt} />
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

Image.defaultProps = {
  children: null,
  alt: '',
  link: null,
  width: 'auto',
  height: 'auto',
  maxHeight: '',
  maxWidth: '',
  minWidth: '',
  minHeight: '',
  backgroundSize: 'contain',
}

export default Image
