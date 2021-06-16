import styled from '@emotion/styled'
import { themeTypes } from '../../../styles/utilities/color'

export const RichTextLink = styled.a<{ typeStyle: string }>`
  text-decoration: none;
  ${(props: any) => themeTypes(props.typeStyle, 'link')};
`
