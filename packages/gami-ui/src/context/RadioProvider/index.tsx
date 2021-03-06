import { ISetRadioSelected } from 'core/domain/interfaces/IRadioContext'
import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_RADIO_SELECTED } from './types'

const RadioProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    radioSelected: null,
  } as const

  const [state, dispatch] = useReducer(reducer, initialState)

  const setRadioSelected = (data: ISetRadioSelected) => {
    dispatch({
      type: SET_RADIO_SELECTED,
      payload: data,
    })
  }

  return (
    <context.Provider
      value={{
        radioSelected: state.radioSelected,
        setRadioSelected,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default RadioProvider
