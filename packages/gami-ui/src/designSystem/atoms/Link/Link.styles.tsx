import styled from '@emotion/styled'
import { HeightType, LinkType, WidthType } from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { mixinComponentsTheme } from 'styles/mixins/componentsTheme'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const Link = styled.a<{
  $linkType: LinkType
  $height?: HeightType
  $width?: WidthType
  theme: ICustomTheme
}>`
  text-decoration: none;
  ${({ $linkType, theme }) => mixinComponentsTheme(theme, $linkType, 'link')};

  ${({ $width, $height }) =>
    setGenericPropStyles({
      width: $width || 'auto',
      height: $height || 'auto',
    })};
`
