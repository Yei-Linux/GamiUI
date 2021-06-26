import styled from '@emotion/styled'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const AvatarWrapper = styled.div<{
  background?: string
  border?: string
  shadow?: string
  fontWeight?: string
}>`
  width: 40px;
  height: 40px;
  background: ${(props) => props.background};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props: any) => twinStyles(props)};
`
