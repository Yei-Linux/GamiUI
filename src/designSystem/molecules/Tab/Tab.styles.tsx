import styled from '@emotion/styled'
import { spacing, theme } from 'styles/tokens'

export const Tab = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
`

export const TabList = styled.ul`
  margin: auto;
  display: flex;
  width: auto;
  list-style: none;
  overflow: hidden;
  width: fit-content;
  border-radius: 1em;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
`

export const TabItem = styled.li`
  padding: ${spacing.padding.md};
  &.active {
    background-color: ${theme.light.primary.jordyBlue};
    color: ${theme.light.neutral[800]};
  }
  &:hover {
    cursor: pointer;
  }
`

export const TabContent = styled.div`
  margin-top: 1rem;
`

export const TabContentItem = styled.div``
