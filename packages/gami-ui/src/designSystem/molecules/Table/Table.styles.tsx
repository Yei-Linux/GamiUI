import styled from '@emotion/styled'
import { mixinScroll } from 'styles/mixins/scroll'
import { defaultTheme } from 'styles/tokens'
import { mediaQuery } from 'styles/utilities/breakpoints'
import { InheritGlobalStylesComponent } from 'styles/utilities/commonComponent'

export const Table = InheritGlobalStylesComponent(styled.div`
  overflow: auto hidden;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  ${mixinScroll('light')}
`)

export const TableContainer = styled.table`
  table-layout: fixed;
  border-collapse: separate;
  border-radius: 2px 2px 0 0;
  border-spacing: 0;
  text-align: left;
`

export const TableHeader = styled.thead`
  background-color: ${defaultTheme.light.neutral[700]};
  color: ${defaultTheme.light.neutral[0]};
`

export const TableHeaderRow = styled.tr``

export const TableHeaderColumn = styled.th`
  ${mediaQuery('lg')} {
    padding: 16px;
  }
  padding: 10px;
`

export const TableBody = styled.tbody``

export const TableBodyRow = styled.tr``

export const TableBodyColumn = styled.td`
  ${mediaQuery('lg')} {
    padding: 16px;
  }
  padding: 10px;
`
