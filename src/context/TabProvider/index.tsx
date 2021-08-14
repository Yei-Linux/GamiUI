import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_TAB_ID_SELECT } from './types'

interface ITabInitialState {
  tabIdSelected: string | null
}

const TabProvider = ({
  children,
  defaultActiveTab,
}: {
  children: React.ReactNode
  defaultActiveTab: string
}) => {
  const initialState: ITabInitialState = {
    tabIdSelected: defaultActiveTab,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setTabIdSelected = (tabId: string) => {
    dispatch({
      type: SET_TAB_ID_SELECT,
      payload: tabId,
    })
  }

  return (
    <context.Provider
      value={{
        tabIdSelected: state.tabIdSelected,
        setTabIdSelected,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default TabProvider
