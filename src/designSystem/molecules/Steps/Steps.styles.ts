import styled from '@emotion/styled'

export const Steps = styled.div`
  display: flex;
  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);
  overflow: hidden;
`

export const StepItem = styled.div<{
  $marginLeft: string
}>`
  flex-shrink: 0;
  width: 100%;
  transition: 0.6s;
  &.firsItem {
    margin-left: ${({ $marginLeft }) => $marginLeft};
  }
`
