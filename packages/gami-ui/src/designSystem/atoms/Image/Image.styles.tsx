import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TWithGlobalStylesUI, withGlobalStylesUI } from 'core/utils/base'
import { PartialBy } from 'core/domain/types/mixins'
import { TImageComponent, TImagePropStyles } from './type'

const commonImgCSS = ({
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}: TImagePropStyles) =>
  css({ width, minWidth, maxWidth, height, minHeight, maxHeight })

export type TLinkImgPropsStyles = PartialBy<TWithGlobalStylesUI, 'theme'>
export const LinkImgStyled = styled('a')((props: TLinkImgPropsStyles) =>
  withGlobalStylesUI(props)()
)

type TImgStyled = TImagePropStyles & PartialBy<TWithGlobalStylesUI, 'theme'>
export const ImgStyled = styled('img')(
  (props: TImgStyled) => commonImgCSS(props),
  (props) => withGlobalStylesUI(props)()
)

type TBackgroundImgStyledProps = TImagePropStyles &
  Pick<TImageComponent, 'src' | 'backgroundSize'> &
  PartialBy<TWithGlobalStylesUI, 'theme'>
export const BackgroundImgStyled = styled('div')(
  ({ src, backgroundSize }: TBackgroundImgStyledProps) => ({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `url(${src})`,
    backgroundSize,
  }),
  (props: TBackgroundImgStyledProps) => commonImgCSS(props),
  (props) => withGlobalStylesUI(props)()
)
