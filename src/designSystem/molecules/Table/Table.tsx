import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'
import {
  TableBody,
  TableBodyColumn,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderColumn,
  TableHeaderRow,
  TableWrapper,
} from './Table.styles'

interface IColumn {
  title: string
  dataIndex: string
  render?: (props: any) => any
}

export interface ITable extends IGeneralProps {
  columns: IColumn[]
  data: any[]
}

const Table = ({ columns, data, ...props }: ITable) => {
  const findRenderByColumn = (key: string, value: string) => {
    const column: any = columns.find((column) => column.dataIndex == key)
    return column?.render ? column?.render(value) : value
  }

  return (
    <TableWrapper {...props}>
      <TableContainer>
        <TableHeader>
          <TableHeaderRow>
            {columns.map((column: IColumn, index: number) => (
              <TableHeaderColumn key={index}>{column.title}</TableHeaderColumn>
            ))}
          </TableHeaderRow>
        </TableHeader>

        <TableBody>
          {data.map((row: any, index: number) => (
            <TableBodyRow key={index}>
              {Object.keys(row).map((column: any, index: number) => (
                <TableBodyColumn key={index}>
                  {findRenderByColumn(column, row[column])}
                </TableBodyColumn>
              ))}
            </TableBodyRow>
          ))}
        </TableBody>
      </TableContainer>
    </TableWrapper>
  )
}

Table.defaultProps = {
  shadow: 'SMALL',
}

export default Table
