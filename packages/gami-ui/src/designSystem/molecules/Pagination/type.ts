import { TDesignUI } from 'core/domain/types/design-system'

export type TOnChange = (page: number) => void

export type TPagination = {
  numberPages: number
  initialPage?: number
  page?: number
  onChangePage?: TOnChange
}

export type TPaginationComponent = TPagination & TDesignUI
