import RichText from 'designSystem/atoms/RichText'
import React from 'react'
import { Column } from './Column'
import { IColumn } from './Table'

export interface ICell {
  cellKey: string
  cellValue: string
  columns: IColumn[]
}

export const Cell = ({ cellKey, cellValue, columns }: ICell) => {
  const findRenderByColumn = (
    cellKey: string,
    cellValue: string,
    columns: IColumn[]
  ) => {
    const column: IColumn | undefined = columns.find(
      ({ dataIndex }) => dataIndex == cellKey
    )
    return column?.render ? (
      column?.render(cellValue)
    ) : (
      <RichText text={cellValue} />
    )
  }

  return <Column>{findRenderByColumn(cellKey, cellValue, columns)}</Column>
}
