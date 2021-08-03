import styled from '@emotion/styled'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const StickyHideHeader = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
`

export const StickyWrapper = styled.div<{ shadow?: string; right: string }>`
  width: min-content;
  height: min-content;
  padding: 1rem;
  position: fixed;
  top: 45%;

  right: ${(props) => props.right};
  transition: all 0.3s;

  ${(props: any) => twinStyles(props)};
`

export const StickyContainer = styled.div``

export const StickyItemWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`

export const StickyHideContainer = styled.div<{
  shadow?: string
  right: string
}>`
  position: relative;
  width: auto;
  height: auto;
  min-height: 200px;
  padding: 1rem;
  padding-top: 25px;
  position: fixed;
  top: 40%;
  right: 0px;
  transition: all 0.3s;
  transform: ${(props) => `translate(${props.right}, 0px)`};

  ${(props: any) => twinStyles(props)};
`
