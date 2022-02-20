import { IGeneralProps } from 'core/domain/interfaces/IGeneralProps'
import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import useImage, { IUseImage } from 'hooks/useImage'
import React, { Fragment } from 'react'
import * as S from './Image.styles'
import { getGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { ImageBackgroundType } from 'core/domain/types'

interface IImageLink {
  url?: string
  newTab?: boolean
}
export type IImageLinkNul = IImageLink | null

type IGeneralPropsImage = Omit<
  IGeneralProps,
  | 'width'
  | 'height'
  | 'textAlign'
  | 'fontWeight'
  | 'padding'
  | 'size'
  | 'onChange'
>

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

export interface IImage
  extends IImagePropStyles,
    IUseImage,
    IGeneralPropsImage {
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
  link?: IImageLinkNul
  /**
   * Background Size In Case has children
   */
  backgroundSize?: ImageBackgroundType
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
  backgroundSize = 'contain',
  sets,
  breakpoints,
  ...genericsProps
}: IImage) => {
  const { handles } = useCssHandle({
    classes: {
      image__wrapper: ['image__wrapper'],
      background__wrapper: ['background__wrapper'],
      link__wrapper: ['link__wrapper'],
    },
    componentPrefixCls: 'image',
    customPrexiCls: genericsProps?.className,
  })
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
    style: genericsProps.style,
    ...optimizationImgSizes,
  }

  const shouldOpenLinkInNewTab = link?.newTab

  const imageElement = children ? (
    <S.BackgroundImg
      {...(!link ? getGenericPropStyles(genericsProps) : {})}
      className={cls(handles.background__wrapper, {
        [genericsProps.className ?? '']: link == null,
      })}
      {...imageCommonsProps}
    >
      {children}
    </S.BackgroundImg>
  ) : (
    <S.Img
      {...(!link ? getGenericPropStyles(genericsProps) : {})}
      className={cls(handles.image__wrapper, {
        [genericsProps.className ?? '']: link == null,
      })}
      {...imageCommonsProps}
      alt={alt}
      loading="lazy"
    />
  )

  const maybeLink = link ? (
    <S.LinkImg
      {...(link ? getGenericPropStyles(genericsProps) : {})}
      className={cls(handles.link__wrapper, {
        [genericsProps.className ?? '']: link != null,
      })}
      href={link?.url}
      target={shouldOpenLinkInNewTab ? '_blank' : undefined}
      rel="noreferrer"
    >
      {imageElement}
    </S.LinkImg>
  ) : (
    <Fragment>{imageElement}</Fragment>
  )

  return <Fragment>{maybeLink}</Fragment>
}

const defaultProps = {
  rounded: 'none',
  shadow: 'none',
}

type ImageComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(Image, defaultProps) as ImageComponent<IImage>
