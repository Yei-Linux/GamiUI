import styled from '@emotion/styled'
import { FeatureCardThemeTypes } from 'core/domain/types'
import { mixinComponentsTypes } from 'styles/mixins/componentsTypes'

export const FeaturedCard = styled.div<{
  $themeType: FeatureCardThemeTypes
  $minWidth: string
}>`
  width: 100%;
  height: 100%;
  min-width: ${({ $minWidth }) => $minWidth};
  padding: 15px 20px;

  ${({ $themeType }) => mixinComponentsTypes('light', $themeType, 'card')};
`
export const FeaturedCardContent = styled.div``
