import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import React from 'react'
import { defaultTheme } from 'styles/tokens'
import * as S from './Table.styles'

export type IRowChildren = (
  entry: [key: string, value: unknown],
  index: number
) => React.ReactNode

export interface IRow {
  item?: IDynamicObjectWithField
  children: React.ReactNode | IRowChildren
  background?: string
}

export const Row = ({
  children,
  item,
  background = defaultTheme.light.neutral[700],
}: IRow) => {
  if (!item)
    return <S.TableRow $background={background}>{children as any}</S.TableRow>

  if (typeof children !== 'function') return null

  return (
    <S.TableRow $background={background}>
      {Object.entries(item).map(children as IRowChildren)}
    </S.TableRow>
  )
}
