import styled from '@emotion/styled'
import { FeatureCardThemeTypes } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'

export const FeaturedCard = styled.div<{
  $themeType: FeatureCardThemeTypes
  $minWidth: string
  theme: ICustomTheme
}>`
  width: 100%;
  height: 100%;
  min-width: ${({ $minWidth }) => $minWidth};
  padding: 15px 20px;

  ${({ $themeType, theme }) => mixinComponentsTheme(theme, $themeType, 'card')};
`
export const FeaturedCardContent = styled.div``
