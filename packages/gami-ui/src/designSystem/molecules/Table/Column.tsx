import { cls } from 'core/utils/cls'
import React from 'react'
import * as S from './Table.styles'

export interface IColumn {
  children: React.ReactNode
  as?: 'th' | 'td'
  colspan?: number
}

export const Column = ({ children, as = 'td', colspan }: IColumn) => {
  return (
    <S.TableColumn
      as={as}
      colSpan={colspan}
      className={cls({
        header: as === 'th',
      })}
    >
      {children}
    </S.TableColumn>
  )
}
