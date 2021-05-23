import styled from '@emotion/styled'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const TagWrapper = styled.div<{
  background?: string
  color?: string
  border?: string
  shadow?: string
  fontWeight?: string
}>`
  padding: 5px 10px;
  width: fit-content;
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;

  background: ${(props) => props.background};
  color: ${(props) => props.color};
  ${(props: any) => twinStyles(props)};
`
export const BallMarker = styled.span<{ background?: string }>`
  border-radius: 4em;
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 5px;

  background: ${(props) => props.background};
`
