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

export const ImgStyled = styled('img')((props: TImagePropStyles) =>
  commonImgCSS(props)
)

type TBackgroundImgStyledProps = TImagePropStyles &
  Pick<TImageComponent, 'src' | 'backgroundSize'> &
  PartialBy<TWithGlobalStylesUI, 'theme'>
export const BackgroundImgStyled = styled('img')(
  ({ src, backgroundSize }: TBackgroundImgStyledProps) => ({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImmage: `url(${src})`,
    backgroundSize,
  }),
  (props: TBackgroundImgStyledProps) => commonImgCSS(props),
  (props) => withGlobalStylesUI(props)('avatar')
)
