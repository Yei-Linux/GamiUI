import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  RoundedType,
  HeightType,
  ShadowType,
  WidthType,
} from 'core/domain/types'
import { zIndex } from 'styles/tokens'
import { mediaQuery } from 'styles/utilities/breakpoints'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const floatingRight = () => css`
  margin: auto;
  right: 10px;

  ${mediaQuery('md')} {
    top: 40%;
  }
`

export const floatingLeft = () => css`
  margin: auto;
  left: 10px;

  ${mediaQuery('md')} {
    top: 40%;
  }
`

export const floatingTop = () => css`
  margin: auto;
  top: 10px;

  ${mediaQuery('md')} {
    left: 40%;
  }
`

export const floatingBottom = () => css`
  margin: auto;
  bottom: 10px;

  ${mediaQuery('md')} {
    left: 40%;
  }
`

export const Floating = styled.div<{
  $direction: 'left' | 'top' | 'right' | 'bottom'
  $border?: RoundedType
  $shadow?: ShadowType
  $width?: WidthType
  $height?: HeightType
}>`
  z-index: ${zIndex[5]};
  background-color: white;
  width: fit-content;
  overflow: hidden;
  padding: 1rem;

  position: fixed;

  ${({ $border, $shadow, $width, $height }) =>
    setGenericPropStyles({
      border: $border || 'sm',
      shadow: $shadow || 'sm',
      width: $width || 'auto',
      height: $height || 'auto',
    })};

  ${({ $direction }) => $direction == 'right' && floatingRight()}
  ${({ $direction }) => $direction == 'left' && floatingLeft()}
  ${({ $direction }) => $direction == 'top' && floatingTop()}
  ${({ $direction }) => $direction == 'bottom' && floatingBottom()}
`

export const FloatingHeader = styled.div`
  display: flex;
`
