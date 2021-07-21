import styled from '@emotion/styled'
import { colorLight } from '../../../styles/theme'
import { mediaQuery } from '../../../styles/utilities/breakpoints'
import { twinStyles } from '../../../styles/utilities/twinStyles'

export const TableWrapper = styled.div<{
  shadow?: string
}>`
  overflow: hidden;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  width: fit-content;
  ${(props: any) => twinStyles(props)};
`

export const TableContainer = styled.table`
  table-layout: fixed;
  border-collapse: separate;
  border-radius: 2px 2px 0 0;
  border-spacing: 0;
  text-align: left;
`

export const TableHeader = styled.thead`
  background-color: ${colorLight.neutral.eight};
  color: ${colorLight.neutral.one};
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
