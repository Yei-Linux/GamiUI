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

export const Layout = styled.div<{
  $hasSidebar: boolean
  $width: string
  $height: string
  $minHeight: string
  $gridTemplate: string
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  min-height: ${({ $minHeight }) => $minHeight};

  display: grid;
  grid-template: ${({ $gridTemplate }) => $gridTemplate};
`

/**
 *
 * <Layout>
 *  <Aside>
 *  </Aside>
 *
 *  <Content/>
 * </Layout>
 */
