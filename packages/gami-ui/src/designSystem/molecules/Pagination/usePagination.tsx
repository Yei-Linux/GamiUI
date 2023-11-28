import { useState, useEffect } from 'react'
import { TPagination } from './type'

export type TUsePagination = TPagination
export const usePagination = ({
  initialPage = 0,
  page,
  numberPages,
  onChangePage,
}: TUsePagination) => {
  const [pageIndex, setPageIndex] = useState(initialPage)

  useEffect(() => {
    if (page === undefined) return
    if (page < 0) return

    setPageIndex(page)
  }, [page])

  const [pageSelected, setPageSelected] = useState(initialPage)
  const [textPageSelected, setTextPageSelected] = useState(initialPage)

  const canPreviousPage = pageIndex > 0
  const canNextPage = pageIndex + 1 < numberPages

  const nextPage = () => {
    if (!canNextPage) return

    setPageIndex((prevPageIndex) => {
      const newPage = prevPageIndex + 1
      onChangePage?.(newPage)

      return newPage
    })
  }

  const prevPage = () => {
    if (!canPreviousPage) return
    setPageIndex((prevPageIndex) => {
      const newPage = prevPageIndex - 1
      onChangePage?.(newPage)

      return newPage
    })
  }

  const gotoPage = (page: number) => {
    onChangePage?.(page)
    setPageIndex(page)
  }

  const getCurrentPosition = () => pageSelected * (39 + 4)

  const computePageSelected = (arrayOfPageComputed: (string | number)[]) => {
    arrayOfPageComputed.forEach((chunk, index) => {
      if (chunk == pageIndex && index != pageSelected) {
        setPageSelected(Number(index))
      }
      if (chunk == pageIndex && chunk != textPageSelected) {
        setTextPageSelected(Number(chunk))
      }
    })
  }

  return {
    prevPage,
    nextPage,
    gotoPage,
    getCurrentPosition,
    computePageSelected,
    pageIndex,
    textPageSelected,
  }
}
