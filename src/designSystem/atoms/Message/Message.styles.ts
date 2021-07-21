import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  messageDirectionLeft,
  messageDirectionRight,
} from '../../../styles/utilities/message'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const MessageWrapper = styled.div<{
  direction: string
  background: string
  hasMarker?: boolean
  color?: string
  maxWidth?: string
  shadow?: string
  width?: string
  heigth?: string
  textAlign?: string
  fontWeight?: string
}>`
  color: ${(props: any) => props.color};
  max-width: ${(props: any) => props.maxWidth};

  position: relative;
  padding: 8px;
  text-align: left;
  border-radius: 10px;
  min-height: 20px;
  background-color: ${(props) => props.background};
  border: 1px solid ${(props) => props.background};
  display: flex;
  align-items: center;

  ${(props: any) => twinStyles(props)};

  &::after,
  &::before {
    ${(props: any) =>
      props.hasMarker &&
      css`
        content: '';
        position: absolute;
        width: 0;
        height: 0;

        border-left: 16px solid transparent;
        border-right: 16px solid transparent;
      `}
  }

  &::before {
    ${(props) =>
      props.direction == 'left' &&
      props.hasMarker &&
      messageDirectionLeft(props, 'before')}

    ${(props) =>
      props.direction == 'right' &&
      props.hasMarker &&
      messageDirectionRight(props, 'before')}
  }

  &::after {
    ${(props) =>
      props.direction == 'left' &&
      props.hasMarker &&
      messageDirectionLeft(props, 'after')}

    ${(props) =>
      props.direction == 'right' &&
      props.hasMarker &&
      messageDirectionRight(props, 'after')}
  }
`
