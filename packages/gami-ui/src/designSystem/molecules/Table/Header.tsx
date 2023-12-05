import React from 'react'
import { defaultTheme } from 'styles/tokens'
import { Row } from './Row'
import { IColumn } from './Table'
import * as S from './Table.styles'

export type IHeaderChildren = (
  column: IColumn,
  index: number
) => React.ReactNode

export interface IHeader {
  columns: IColumn[]
  children: IHeaderChildren
  background?: string
}

export const Header = ({
  children,
  columns,
  background = defaultTheme.light.neutral[700],
}: IHeader) => {
  return (
    <S.TableHeader $background={background}>
      <Row>{columns.map(children)}</Row>
    </S.TableHeader>
  )
}
