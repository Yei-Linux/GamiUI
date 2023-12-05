import React from 'react'
import Pagination from '../Pagination'
import { Column } from './Column'
import { TOnChange } from '../Pagination/type'

export interface ITPagination {
  numberPages: number
  initialPage: number
  columns?: number
  onChangePage?: TOnChange
}

export const TPagination = ({
  numberPages,
  initialPage,
  onChangePage,
  columns,
}: ITPagination) => {
  return (
    <Column colspan={columns}>
      <Pagination
        numberPages={numberPages}
        initialPage={initialPage}
        onChangePage={onChangePage}
      />
    </Column>
  )
}
