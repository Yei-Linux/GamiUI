import styled from '@emotion/styled'
import { spacing, defaultTheme } from 'styles/tokens'

export const Tab = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
`

export const TabList = styled.ul`
  display: flex;
  width: auto;
  list-style: none;
  overflow: hidden;
  width: fit-content;

  position: relative;
`

export const TabItem = styled.li`
  padding: ${spacing.padding.md};
  &.active {
    color: ${defaultTheme.light.primary.jordyBlue};
  }
  &:hover {
    cursor: pointer;
  }
`

export const TabContent = styled.div`
  margin-top: 1rem;
`

export const TabContentItem = styled.div`
  &.hide {
    display: none;
  }
`

export const TabAnimation = styled.div<{ $left: string; $width: string }>`
  position: absolute;
  left: ${({ $left }) => $left};
  height: 2px;
  width: ${({ $width }) => $width};
  bottom: 0px;
  background-color: ${defaultTheme.light.primary.jordyBlue};

  transition: width 0.3s, left 0.3s, right 0.3s;
`

export const TabListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
