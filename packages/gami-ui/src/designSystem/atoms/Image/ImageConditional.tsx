import React, { Fragment } from 'react'
import * as S from './Image.styles'
import { TImageComponent, TImageLinkNul } from './type'
import { cls } from 'core/utils/cls'
import { IDynamicPropStyles } from 'styles/utilities/genericPropStyles'
import useCssHandle from 'hooks/useCssHandle'

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
  children: React.ReactNode
  link: TImageLinkNul
  globalStyles: IDynamicPropStyles
  className: TImageComponent['className']
  alt: TImageComponent['alt']
  imageCommonsProps: TImageCommonsProps
}
export const ImageConditional = ({
  children,
  link,
  globalStyles,
  className,
  imageCommonsProps,
  alt,
}: TImageConditional) => {
  const { handles } = useCssHandle({
    classes: {
      background: ['background'],
      imageelement: ['imageelement'],
    },
    componentPrefixCls: 'image',
  })
  const imgProps = {
    ...(!link ? globalStyles : {}),
    ...imageCommonsProps,
    className: cls(className ?? '', {
      [className ?? '']: link == null,
    }),
  }

  return (
    <Fragment>
      {children ? (
        <S.BackgroundImgStyled
          {...imgProps}
          className={cls(handles.background)}
        >
          {children}
        </S.BackgroundImgStyled>
      ) : (
        <S.ImgStyled
          {...imgProps}
          alt={alt}
          loading="lazy"
          className={cls(handles.imageelement)}
        />
      )}
    </Fragment>
  )
}
