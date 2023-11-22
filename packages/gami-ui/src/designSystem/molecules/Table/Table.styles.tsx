import styled from '@emotion/styled'
import { mixinScroll } from 'styles/mixins/scroll'
import { defaultTheme } from 'styles/tokens'
import { mediaQuery } from 'styles/utilities/breakpoints'
import { WithDesignStyledComponent } from 'styles/utilities/commonComponent'

export const TableContainer = WithDesignStyledComponent(styled.div`
  overflow: auto hidden;
  ${mixinScroll('light')}
`)

export const TableFooter = styled.tfoot`
  height: 2.5rem;
`

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0 10px;
  text-align: left;
  width: 100%;
`

export const TableHeader = styled.thead<{ $background: string }>`
  color: ${defaultTheme.light.neutral[100]};
`

export const TableBody = styled.tbody``

export const TableRow = styled.tr<{ $background: string }>`
  background-color: ${({ $background }) => $background};
`

export const TableColumn = styled.td`
  ${mediaQuery('lg')} {
    padding: 16px;
  }
  padding: 10px;

  &:first-child {
    border-top-left-radius: 0.6em;
    border-bottom-left-radius: 0.6em;
  }
  &:last-child {
    border-top-right-radius: 0.6em;
    border-bottom-right-radius: 0.6em;
  }
`
