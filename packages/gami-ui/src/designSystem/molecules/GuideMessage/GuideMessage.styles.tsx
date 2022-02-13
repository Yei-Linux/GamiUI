import styled from '@emotion/styled'
import {
  RoundedType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const GuideMessage = styled.div<{
  $border?: RoundedType
  $shadow?: ShadowType
  $width?: WidthType
  $height?: HeightType
  $direction: 'left' | 'right'
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  flex-direction: ${({ $direction }) =>
    $direction == 'left' ? 'row' : 'row-reverse'};

  ${({ $border, $shadow, $width, $height }) =>
    setGenericPropStyles({
      border: $border || 'none',
      shadow: $shadow || 'none',
      width: $width || 'auto',
      height: $height || 'auto',
    })};
`
