import styled from '@emotion/styled'
import { palette } from '../../../styles/theme'

export const Tab = styled.div`
  width: fit-content;
`

export const TabList = styled.ul`
  margin: auto;
  display: flex;
  width: auto;
  list-style: none;
  overflow: hidden;
  width: fit-content;
  border-radius: 2em;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
`

export const TabItem = styled.li`
  padding: 1rem;
  &.active {
    background-color: ${palette.light.color.primary.one};
    color: ${palette.light.color.neutral.nine};
  }
  &:hover {
    cursor: pointer;
  }
`

export const TabContent = styled.div`
  margin-top: 1rem;
`

export const TabContentItem = styled.div``
