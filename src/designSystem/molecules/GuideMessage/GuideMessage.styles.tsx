import styled from '@emotion/styled'
import {
  BorderType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const GuideMessage = styled.div<{
  $border?: BorderType
  $shadow?: ShadowType
  $width?: WidthType
  $heigth?: HeightType
  $direction: 'left' | 'right'
}>`
  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })}

  flex-direction: ${({ $direction }) =>
    $direction == 'left' ? 'row' : 'row-reverse'};

  ${({ $border, $shadow, $width, $heigth }) =>
    setGenericPropStyles({
      border: $border || 'lg',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      heigth: $heigth || 'sm',
    })};
`
