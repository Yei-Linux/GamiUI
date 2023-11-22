import styled from '@emotion/styled'
import Container from 'designSystem/layouts/Container'
import Icon from 'designSystem/atoms/Icon'
import { lightTheme } from 'styles/tokens/lightTheme'
import { Panel } from 'styles/utilities/commonComponent'

export const Calendar = styled(Panel)``

export const Header = styled(Container)`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2rem;
`

export const Prev = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`

export const Next = styled(Icon)`
  &:hover {
    cursor: pointer;
  }
`

export const Month = styled.div`
  font-weight: bold;
`

export const Body = styled(Container)``

export const DayHead = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;

  margin-bottom: 1rem;
`

export const DayItem = styled.div`
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const DayNameSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: darkgray;
`

export const DayBody = styled.div<{ $rows: number }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${({ $rows }) => $rows}, 1fr);
  grid-row-gap: 1rem;
`

export const DayWeekItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DaySpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  color: darkgray;

  border-radius: 0.4em;
  cursor: pointer;

  &.month {
    color: black;
    font-weight: bold;
  }

  &.today {
    border: 1px solid ${lightTheme.primary.mediumPurple};
    color: ${lightTheme.primary.mediumPurple};
  }

  &:hover {
    background-color: #f2eeff;
  }

  &.selected {
    background-color: ${lightTheme.primary.mediumPurple};
    color: ${lightTheme.neutral[800]};
  }
`
