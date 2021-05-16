import React, { Fragment } from 'react'
import { BackgroundImg, Img } from './Image.styles'

interface ImageLink {
  url?: string
  newTab?: boolean
}

export interface ImageProps {
  children?: React.ReactNode
  src: string
  alt?: string
  maxWidth: string
  maxHeight: string
  minWidth: string
  minHeight: string
  width: string
  height: string
  link?: ImageLink | null
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
}: ImageProps) => {
  const imageCommonsProps = {
    src,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    width,
    height,
  }
  const shouldOpenLinkInNewTab = link?.newTab
  const imageElement = children ? (
    <BackgroundImg {...imageCommonsProps}>{children}</BackgroundImg>
  ) : (
    <Img {...imageCommonsProps} alt={alt} />
  )
  const maybeLink = link ? (
    <a
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
}

export default Image
