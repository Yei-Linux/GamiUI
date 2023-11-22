import Icon from 'designSystem/atoms/Icon'
import React, { useEffect, useState } from 'react'
import * as S from './Pagination.styles'

export type TOnChange = (page: number) => void

export interface IPagination {
  numberPages: number
  initialPage?: number
  page?: number
  onChangePage?: TOnChange
}

const Pagination = ({
  numberPages = 3,
  initialPage = 0,
  onChangePage,
  page,
}: IPagination) => {
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

  const getPages = (
    defaultArrayOfPages: (number | string)[],
    currentPage: number
  ): (number | string)[] => {
    const initialIndex = 3
    const beforePositionsFromLast = 4

    const arrayWithCuts: (number | string)[] = defaultArrayOfPages.reduce(
      (acc, page, index) => {
        if (currentPage < initialIndex - 1) {
          if (index < initialIndex) {
            return [...acc, page]
          }
          if (index >= defaultArrayOfPages.length - 2) {
            return [...acc, page]
          }
          return acc.includes('middle') ? acc : [...acc, 'middle']
        }

        if (
          currentPage >= initialIndex - 1 &&
          currentPage <= defaultArrayOfPages.length - beforePositionsFromLast
        ) {
          if (index === 0) {
            return [...acc, page]
          }
          if (index === defaultArrayOfPages.length - 1) {
            return [...acc, page]
          }
          if (index === currentPage || index === currentPage + 1) {
            return [...acc, page]
          }
          if (index < currentPage || index < currentPage + 1) {
            return acc.includes('before') ? acc : [...acc, 'before']
          }
          return acc.includes('after') ? acc : [...acc, 'after']
        }

        if (currentPage >= defaultArrayOfPages.length - 3) {
          if (index === 0 || index === 1) {
            return [...acc, page]
          }
          if (index >= defaultArrayOfPages.length - 3) {
            return [...acc, page]
          }
          return acc.includes('middle') ? acc : [...acc, 'middle']
        }

        return acc
      },
      [] as (number | string)[]
    )

    computePageSelected(arrayWithCuts)

    return arrayWithCuts
  }

  const getArrayOfPage = (): (string | number)[] => {
    const defaultArrayOfPages = Array.from(Array(numberPages).keys())

    if (numberPages <= 5) {
      computePageSelected(defaultArrayOfPages)

      return defaultArrayOfPages
    }

    const pagesTransformed = getPages(defaultArrayOfPages, pageIndex)

    return pagesTransformed
  }

  const arrayPageItems = getArrayOfPage()

  return (
    <S.Pagination>
      <S.Arrow variant="primary" light shadow="none" onClick={prevPage}>
        <Icon color="#9879e9" name="arrow__left" />
      </S.Arrow>

      <S.PaginationBody>
        <S.PageSelected
          $left={getCurrentPosition()}
          shadow="secondary"
          variant="secondary"
        >
          <S.PageSpan $color="white">{textPageSelected + 1}</S.PageSpan>
        </S.PageSelected>

        {arrayPageItems.map((page, index) => (
          <S.PageItem
            variant="secondary"
            flat
            onClick={() =>
              !['middle', 'before', 'after'].includes(`${page}`) &&
              gotoPage(Number(page))
            }
            key={index}
          >
            <S.PageSpan>
              {['middle', 'before', 'after'].includes(`${page}`)
                ? '...'
                : Number(page) + 1}
            </S.PageSpan>
          </S.PageItem>
        ))}
      </S.PaginationBody>

      <S.Arrow variant="primary" light shadow="none" onClick={nextPage}>
        <Icon color="#9879e9" name="arrow__right" />
      </S.Arrow>
    </S.Pagination>
  )
}

export default Pagination
