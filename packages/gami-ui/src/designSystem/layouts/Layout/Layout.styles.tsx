import styled from '@emotion/styled'
import { ICustomTheme } from 'providers/ThemeGamification/ThemeGamification'

export const Header = styled.div<{ theme?: ICustomTheme }>`
  grid-area: header;

  &.sticky {
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.tokens.zIndex[1]};
  }
`

export const Content = styled.div`
  grid-area: main;
`

export const Sidebar = styled.div`
  grid-area: sidebar;
`

export const Footer = styled.div`
  grid-area: footer;
`

export const Layout = styled.div<{ $hasSidebar: boolean }>`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;

  grid-template:
    'header header header' minmax(100px, max-content)
    ${({ $hasSidebar }) =>
      $hasSidebar ? `'sidebar main main' auto` : `'main main main' auto`}
    'footer footer footer' minmax(100px, max-content);
`
