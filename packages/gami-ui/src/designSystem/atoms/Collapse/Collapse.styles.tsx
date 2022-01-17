import styled from '@emotion/styled'

export const Collapse = styled.div<{ $height: string }>`
  .open {
    max-height: ${({ $height }) => $height};
  }
`

export const Header = styled.div``

export const Content = styled.div`
  padding-left: 19px;

  max-height: 0px;

  overflow: hidden;
  transition: 0.4s max-height;
`

export const Children = styled.div``
