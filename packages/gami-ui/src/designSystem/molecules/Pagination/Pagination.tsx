import Icon from 'designSystem/atoms/Icon'
import React from 'react'
import * as S from './Pagination.styles'
import { getArrayOfPage } from './helper'
import { TPaginationComponent } from './type'
import withDefaults from 'hocs/WithDefault'
import useCssHandle from 'hooks/useCssHandle'
import { cls } from 'core/utils/cls'
import { usePagination } from './usePagination'

const Pagination = ({
  numberPages = 3,
  initialPage = 0,
  onChangePage,
  page,
}: TPaginationComponent) => {
  const { handles } = useCssHandle({
    classes: {
      wrapper: ['wrapper'],
      prev_arrow: ['prev_arrow'],
      next_arrow: ['next_arrow'],
      body: ['body'],
      page_selected: ['page_selected'],
      page_selected_span: ['page_selected_span'],
      page_item: ['page_item'],
      page_item_span: ['page_item_span'],
    },
    componentPrefixCls: 'pagination',
    customPrexiCls: '',
  })
  const {
    prevPage,
    nextPage,
    gotoPage,
    getCurrentPosition,
    computePageSelected,
    pageIndex,
    textPageSelected,
  } = usePagination({ numberPages, initialPage, onChangePage, page })

  const arrayPageItems = getArrayOfPage({
    numberPages,
    computePageSelected,
    pageIndex,
  })

  return (
    <S.PaginationStyled className={cls(handles.wrapper)}>
      <S.ArrowStyled
        className={cls(handles.prev_arrow)}
        variant="primary"
        light
        shadow="none"
        onClick={prevPage}
      >
        <Icon color="#9879e9" name="arrow__left" />
      </S.ArrowStyled>

      <S.PaginationBodyStyled className={cls(handles.body)}>
        <S.PageSelectedStyled
          className={cls(handles.page_selected)}
          $left={getCurrentPosition()}
          shadow="secondary"
          variant="secondary"
        >
          <S.PageSpanStyled
            className={cls(handles.page_selected_span)}
            $color="white"
          >
            {textPageSelected + 1}
          </S.PageSpanStyled>
        </S.PageSelectedStyled>

        {arrayPageItems.map((page, index) => (
          <S.PageItemStyled
            className={cls(handles.page_item)}
            variant="secondary"
            flat
            onClick={() =>
              !['middle', 'before', 'after'].includes(`${page}`) &&
              gotoPage(Number(page))
            }
            key={index}
          >
            <S.PageSpanStyled className={cls(handles.page_item_span)}>
              {['middle', 'before', 'after'].includes(`${page}`)
                ? '...'
                : Number(page) + 1}
            </S.PageSpanStyled>
          </S.PageItemStyled>
        ))}
      </S.PaginationBodyStyled>

      <S.ArrowStyled
        className={cls(handles.next_arrow)}
        variant="primary"
        light
        shadow="none"
        onClick={nextPage}
      >
        <Icon color="#9879e9" name="arrow__right" />
      </S.ArrowStyled>
    </S.PaginationStyled>
  )
}

const defaultProps = {}

Pagination.displayName = 'Pagination'

type PaginationComponent<P> = React.NamedExoticComponent<P> & {
  defaultProps: P
}

export default withDefaults(
  Pagination,
  defaultProps
) as PaginationComponent<TPaginationComponent>
