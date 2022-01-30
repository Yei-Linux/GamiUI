import styled from '@emotion/styled'
import { BorderType, FontWeightType, ShadowType } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinFlexVariants } from 'styles/mixins/flex'
import { GlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Avatar = styled(GlobalStylesComponent('div'))<{
  $background?: string
  theme?: ICustomTheme
}>`
  width: ${({ theme }) => theme.tokens.sizes.avatar.width};
  height: ${({ theme }) => theme.tokens.sizes.avatar.height};

  background: ${({ $background }) => $background};
  overflow: hidden;

  ${mixinFlexVariants({ justifyContent: 'center', alignItems: 'center' })};
`
