import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FloatingTypes } from 'core/domain/types'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'
import { mediaQuery } from 'styles/utilities/breakpoints'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const floatingRight = (customTheme: ICustomTheme) => css`
  margin: auto;
  right: 10px;

  ${mediaQuery('md', customTheme.tokens.breakspointSizes)} {
    top: 40%;
  }
`

export const floatingLeft = (customTheme: ICustomTheme) => css`
  margin: auto;
  left: 10px;

  ${mediaQuery('md', customTheme.tokens.breakspointSizes)} {
    top: 40%;
  }
`

export const floatingTop = (customTheme: ICustomTheme) => css`
  margin: auto;
  top: 10px;

  ${mediaQuery('md', customTheme.tokens.breakspointSizes)} {
    left: 40%;
  }
`

export const floatingBottom = (customTheme: ICustomTheme) => css`
  margin: auto;
  bottom: 10px;

  ${mediaQuery('md', customTheme.tokens.breakspointSizes)} {
    left: 40%;
  }
`

export const Floating = InheritGlobalStylesComponent(styled.div<{
  $direction: FloatingTypes
  theme?: ICustomTheme
}>`
  z-index: ${({ theme }) => theme.tokens.zIndex[5]};
  background-color: white;
  width: fit-content;
  overflow: hidden;
  padding: 1rem;

  position: fixed;

  ${({ $direction, theme }) => $direction == 'right' && floatingRight(theme)}
  ${({ $direction, theme }) => $direction == 'left' && floatingLeft(theme)}
  ${({ $direction, theme }) => $direction == 'top' && floatingTop(theme)}
  ${({ $direction, theme }) => $direction == 'bottom' && floatingBottom(theme)}
`)

export const FloatingHeader = styled.div`
  display: flex;
`
