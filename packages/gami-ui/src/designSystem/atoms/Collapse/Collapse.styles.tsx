import styled from '@emotion/styled'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Header = styled.div``

export const Content = styled.div`
  padding-left: 19px;

  max-height: 0px;

  overflow: hidden;
  transition: 0.4s max-height;
`

export const Children = styled.div``

export const Collapse = InheritGlobalStylesComponent(styled.div<{
  $height: string
}>`
  .open {
    max-height: ${({ $height }) => $height};
  }
`)
