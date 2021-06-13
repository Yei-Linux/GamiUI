import styled from '@emotion/styled'

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template: 50px 1fr 1fr 100px / repeat(3, 1fr);

  gap: 10px;
`

export const HeaderWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`

export const ContentWrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: span 2;

  grid-column-start: 1;
  grid-column-end: 4;
`

export const FooterWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`
