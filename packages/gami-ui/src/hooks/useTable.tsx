import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { IColumn } from 'designSystem/molecules/Table/Table'
import { useState } from 'react'

export interface ITable {
  columnsTable: IColumn[]
  itemsTable: IDynamicObjectWithField[]
}

export interface IUseTable {
  table: ITable

  totalItemsSize: number
  pageCount: number
}

const useTable = ({
  table: { columnsTable, itemsTable },
  totalItemsSize,
  pageCount,
}: IUseTable) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pageSize, setPageSize] = useState(pageCount)

  const numberPages = Math.ceil(totalItemsSize / pageSize)

  const canPreviousPage = pageIndex > 0

  const canNextPage = pageIndex < numberPages

  const nextPage = () =>
    canNextPage && setPageIndex((prevPageIndex) => prevPageIndex + 1)

  const prevPage = () =>
    canPreviousPage && setPageIndex((prevPageIndex) => prevPageIndex - 1)

  const gotoPage = (page: number) => setPageIndex(page)

  return {
    columns: columnsTable,
    items: itemsTable,

    pageSize,
    setPageSize,

    numberPages,
    pageIndex,

    nextPage,
    prevPage,
    gotoPage,
    canPreviousPage,
    canNextPage,
  }
}

export default useTable
