import styled from '@emotion/styled'
import {
  floatingBottom,
  floatingLeft,
  floatingRight,
  floatingTop,
} from '../../../styles/utilities/floating'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const FloatingWrapper = styled.div<{
  direction: 'left' | 'top' | 'right' | 'bottom'
  border?: string
  shadow?: string
  width?: string
  heigth?: string
}>`
  z-index: 99999;
  background-color: white;
  width: fit-content;
  overflow: hidden;
  padding: 1rem;

  position: fixed;

  ${(props: any) => twinStyles(props)};

  ${(props) => props.direction == 'right' && floatingRight()}
  ${(props) => props.direction == 'left' && floatingLeft()}
  ${(props) => props.direction == 'top' && floatingTop()}
  ${(props) => props.direction == 'bottom' && floatingBottom()}
`

export const FloatingHeader = styled.div`
  display: flex;
`
