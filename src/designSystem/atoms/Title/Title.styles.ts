import styled from '@emotion/styled'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const TitleWrapper = styled.div<{
  shadow?: string
  width?: string
  heigth?: string
  textAlign?: string
  fontWeight?: string
}>`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${(props: any) => twinStyles(props)};
  }
`
