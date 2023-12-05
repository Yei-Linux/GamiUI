import { cls } from 'core/utils/cls'
import withDefaults from 'hocs/WithDefault'
import useImage from 'hooks/useImage'
import React, { Fragment, useMemo } from 'react'
import * as S from './Image.styles'
import { getDesignProps } from 'styles/utilities/genericPropStyles'
import { TImageComponent } from './type'
import { ImageConditional } from './ImageConditional'
import useCssHandle from 'hooks/useCssHandle'

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
  const { handles } = useCssHandle({
    classes: {
      link__wrapper: ['link__wrapper'],
    },
    componentPrefixCls: 'image',
    customPrexiCls: genericsProps?.className,
  })
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
      link={link}
      globalStyles={globalStyles}
      className={globalStyles.className as string}
      alt={alt}
      imageCommonsProps={imageCommonsProps}
    >
      {children}
    </ImageConditional>
  )

  if (!link) {
    return <Fragment>{imageElementConditional}</Fragment>
  }

  return (
    <S.LinkImgStyled
      {...(link ? globalStyles : {})}
      className={cls(handles.link__wrapper, genericsProps?.className ?? '', {
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
