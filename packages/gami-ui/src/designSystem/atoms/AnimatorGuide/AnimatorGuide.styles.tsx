import styled from '@emotion/styled'
import { RoundedType, ShadowType } from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { IGuide } from './constants'

export const AnimatorGuideImg = styled.div<{
  $imageProps: IGuide
  $border?: RoundedType
  $shadow?: ShadowType
}>`
  width: ${({ $imageProps: { dimensions } }) => dimensions.width};
  height: ${({ $imageProps: { dimensions } }) => dimensions.height};

  background: ${({ $imageProps: { source, position } }) =>
    `url(${source}) ${position.x} ${position.y}`};

  ${({ $border, $shadow }) =>
    setGenericPropStyles({ border: $border, shadow: $shadow })};
`