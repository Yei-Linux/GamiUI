import styled from '@emotion/styled'
import { ShadowType } from 'core/domain/types'
import { defaultTheme } from 'styles/tokens'
import { mediaQuery } from 'styles/utilities/breakpoints'
import { setGenericPropStyles } from 'styles/utilities/genericPropStyles'

export const Table = styled.div<{
  $shadow?: ShadowType
}>`
  overflow: hidden;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  width: fit-content;

  ${({ $shadow }) =>
    setGenericPropStyles({
      shadow: $shadow || 'sm',
    })};
`

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
