import React, { Fragment } from 'react'
import context from '../../../context/TabProvider/context'
import useStore from '../../../hooks/useStore'
import * as S from './Tab.styles'

export interface ITabContentItem {
  children: React.ReactNode
  tabId: string
}

const TabContentItem = ({ children, tabId }: ITabContentItem) => {
  const { tabIdSelected } = useStore({ context: context })

  return (
    <Fragment>
      {tabIdSelected == tabId && (
        <S.TabContentItem onClick={() => tabId}>{children}</S.TabContentItem>
      )}
    </Fragment>
  )
}

export default TabContentItem
