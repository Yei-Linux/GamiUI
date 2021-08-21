import styled from '@emotion/styled'
import { BorderType, FontWeightType, ShadowType } from 'core/domain/types'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { sizes } from 'styles/tokens/sizes'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Avatar = styled.div<{
  $background?: string
  $border?: BorderType
  $shadow?: ShadowType
  $fontWeight?: FontWeightType
}>`
  width: ${sizes.avatar.width};
  height: ${sizes.avatar.height};

  background: ${({ $background }) => $background};
  overflow: hidden;

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};

  ${({ $border, $shadow, $fontWeight }) =>
    setGenericPropStyles({
      border: $border || 'ROUNDED',
      shadow: $shadow,
      fontWeight: $fontWeight || 'BOLD',
      textAlign: 'CENTER',
    })};
`
