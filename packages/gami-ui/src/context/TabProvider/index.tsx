import React, { useReducer, useEffect } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_TABS_AVAILABLE, SET_TAB_ID_SELECT } from './types'

export interface ITabSelected {
  tabId: string
  index: number
}

const TabProvider = ({
  children,
  defaultActiveTab,
}: {
  children: React.ReactNode
  defaultActiveTab: ITabSelected
}) => {
  const initialState = {
    tabIdSelected: defaultActiveTab,
    tabsAvailable: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setTabIdSelected = (tabSelected: ITabSelected) => {
    dispatch({
      type: SET_TAB_ID_SELECT,
      payload: tabSelected,
    })
  }

  const setTabsAvailable = (tabId: string) => {
    dispatch({
      type: SET_TABS_AVAILABLE,
      payload: tabId,
    })
  }

  useEffect(() => {
    setTabsAvailable(defaultActiveTab.tabId)
  }, [JSON.stringify(defaultActiveTab)])

  return (
    <context.Provider
      value={{
        tabIdSelected: state.tabIdSelected,
        tabsAvailable: state.tabsAvailable,
        setTabIdSelected,
        setTabsAvailable,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default TabProvider
