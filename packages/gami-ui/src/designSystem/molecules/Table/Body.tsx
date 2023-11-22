import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import React from 'react'
import * as S from './Table.styles'

export type IBodyChildren = (
  item: IDynamicObjectWithField,
  index: number
) => React.ReactNode

export interface IBody {
  children: IBodyChildren
  items: IDynamicObjectWithField[]
}

export const Body = ({ children, items }: IBody) => {
  return <S.TableBody>{items.map(children)}</S.TableBody>
}
