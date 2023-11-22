import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useImage from 'hooks/useImage'
import React, { Fragment, useMemo } from 'react'
import * as S from './Image.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { TImageComponent } from './type'
import { ImageConditional } from './ImageConditional'

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
}: TImageComponent) => {
  const { setsImg, breakpointsImg } = useImage({ sets, breakpoints })
  const globalStyles = useMemo(
    () => getDesignProps(genericsProps),
    [genericsProps]
  )
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
  const imageElementConditional = (
    <ImageConditional
      content={children}
      link={link}
      globalStyles={globalStyles}
      className={globalStyles.className as string}
      alt={alt}
      imageCommonsProps={imageCommonsProps}
    />
  )

  if (!link) {
    return <Fragment>{imageElementConditional}</Fragment>
  }

  return (
    <S.LinkImgStyled
      {...(link ? globalStyles : {})}
      className={cls(genericsProps?.className ?? '', {
        [genericsProps.className ?? '']: link != null,
      })}
      href={link?.url}
      target={shouldOpenLinkInNewTab ? '_blank' : undefined}
      rel="noreferrer"
    >
      {imageElementConditional}
    </S.LinkImgStyled>
  )
}

const defaultProps = {
  rounded: 'none',
  shadow: 'none',
}

Image.displayName = 'Image'

type ImageComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Image,
  defaultProps
) as ImageComponent<TImageComponent>
