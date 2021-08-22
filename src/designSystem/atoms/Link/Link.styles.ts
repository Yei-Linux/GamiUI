import styled from '@emotion/styled'
import { themeTypes } from '../../../styles/mixins/componentsTypes'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const RichTextLink = styled.a<{
  typeStyle: string
  heigth?: string
  width?: string
}>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props: any) => twinStyles(props)};
  ${(props: any) => themeTypes(props.typeStyle, 'link')};
`
