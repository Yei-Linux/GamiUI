import styled from '@emotion/styled'
import { themeTypes } from '../../../styles/utilities/color'

export const FeaturedCardWrapper = styled.div<{ themeType: string , minWidth: string}>`
  width: 100%;
  height: 100%;
  min-width: ${(props: any) => props.minWidth};
  padding: 15px 20px;

  ${(props: any) => themeTypes(props.themeType)};
`
export const FeaturedCardContent = styled.div``
