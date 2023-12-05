import React from 'react'

import context from 'context/TabProvider/context'
import useStore from 'hooks/useStore'

import * as S from './Tab.styles'
import { cls } from 'core/utils/cls'

export interface ITabListItem {
  label: string
  tabId: string
  index?: number
}

const TabListItem = ({ label, tabId, index }: ITabListItem) => {
  const { tabIdSelected, setTabIdSelected, setTabsAvailable } = useStore({
    context: context,
  })
  const tabIdFromStore = tabIdSelected.tabId

  const onClickTab = () => {
    setTabIdSelected({
      tabId,
      index,
    })
    setTabsAvailable(tabId)
  }

  return (
    <S.TabItem
      id={`gamui__tablist__item--${index}`}
      role="tab"
      aria-selected={tabId == tabIdFromStore}
      className={cls({ active: tabId == tabIdFromStore })}
      onClick={onClickTab}
    >
      {label}
    </S.TabItem>
  )
}

export default TabListItem
