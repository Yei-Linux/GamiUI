import React, { Fragment, useCallback } from 'react'

import context from 'context/TabProvider/context'
import useStore from 'hooks/useStore'

import * as S from './Tab.styles'
import { cls } from 'core/utils/cls'

export interface ITabContentItem {
  children: React.ReactNode
  tabId: string
}

const TabContentItem = ({ children, tabId }: ITabContentItem) => {
  const { tabIdSelected, tabsAvailable } = useStore({ context: context })
  const tabIdFromStore = tabIdSelected.tabId

  const isAvailableToStartDisplay = useCallback(() => {
    if (!tabsAvailable.includes(tabId)) return false

    return true
  }, [tabsAvailable, tabIdFromStore, tabId])

  return (
    <Fragment>
      {isAvailableToStartDisplay() && (
        <S.TabContentItem
          role="tabpanel"
          aria-hidden={`${tabIdFromStore === tabId}`}
          className={cls({ hide: tabIdFromStore !== tabId })}
          onClick={() => tabId}
        >
          {children}
        </S.TabContentItem>
      )}
    </Fragment>
  )
}

export default TabContentItem
