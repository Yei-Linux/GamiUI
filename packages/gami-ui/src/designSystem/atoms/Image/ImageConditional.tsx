import React, { Fragment } from 'react'
import * as S from './Image.styles'
import { TImageComponent, TImageLinkNul } from './type'
import { IDynamicPropStyles } from 'styles/utilities/genericPropStyles'
import { cls } from 'core/utils/cls'

export type TImageCommonsProps = {
  srcset: string
  sizes: string
  src: TImageComponent['src']
  maxWidth: TImageComponent['maxWidth']
  maxHeight: TImageComponent['maxHeight']
  minWidth: TImageComponent['minWidth']
  minHeight: TImageComponent['minHeight']
  width: TImageComponent['width']
  height: TImageComponent['height']
  backgroundSize: TImageComponent['backgroundSize']
  style: TImageComponent['style']
}

export type TImageConditional = {
  content: React.ReactNode
  link: TImageLinkNul
  globalStyles: IDynamicPropStyles
  className: TImageComponent['className']
  alt: TImageComponent['alt']
  imageCommonsProps: TImageCommonsProps
}
export const ImageConditional = ({
  content,
  link,
  globalStyles,
  className,
  imageCommonsProps,
  alt,
}: TImageConditional) => {
  const imgProps = {
    ...(!link ? globalStyles : {}),
    ...imageCommonsProps,
    className: cls(className ?? '', {
      [className ?? '']: link == null,
    }),
  }

  return (
    <Fragment>
      {content ? (
        <S.BackgroundImgStyled {...imgProps}>{content}</S.BackgroundImgStyled>
      ) : (
        <S.ImgStyled {...imgProps} alt={alt} loading="lazy" />
      )}
    </Fragment>
  )
}
