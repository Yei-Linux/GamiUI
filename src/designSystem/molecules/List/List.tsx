import React from 'react'
import { IGeneralProps } from '../../../core/domain/interfaces/IGeneralProps'

import * as S from './List.styles'
import ListItem from './ListItem'

export interface IList extends IGeneralProps {
  /**
   * Content
   */
  children: React.ReactNode[]
}

const List = ({ children, ...args }: IList) => {
  return <S.List {...args}>{children}</S.List>
}

List.Item = ListItem

export default List
