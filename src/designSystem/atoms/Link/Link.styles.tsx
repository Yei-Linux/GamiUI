import styled from '@emotion/styled'
import { HeightType, LinkType, WidthType } from 'core/domain/types'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'
import { mixinComponentsTypes } from '../../../styles/mixins/componentsTypes'

export const Link = styled.a<{
  $linkType: LinkType
  $heigth?: HeightType
  $width?: WidthType
}>`
  text-decoration: none;
  ${({ $linkType }) => mixinComponentsTypes('light', $linkType, 'link')};

  ${({ $width, $heigth }) =>
    setGenericPropStyles({
      width: $width || 'auto',
      heigth: $heigth || 'sm',
    })};
`
