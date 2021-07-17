import styled from '@emotion/styled'

export const HeaderWrapper = styled.div`
  grid-area: header;
`

export const ContentWrapper = styled.div`
  grid-area: main;
`

export const FooterWrapper = styled.div`
  grid-area: footer;
`

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: grid;

  grid-template:
    'header' minmax(100px, max-content)
    'main' auto
    'footer' minmax(100px, max-content);
`
