import { TOnChangeCollapse } from 'core/domain/interfaces/ICollapseContext'
import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import {
  SET_ACCORDION,
  SET_ANIMATED,
  SET_DIVIDER,
  SET_INDEX,
  SET_ON_CHANGE,
} from './types'

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    index: null,
    accordion: false,
    animated: false,
    divider: false,
    onChange: null,
  } as const

  const [state, dispatch] = useReducer(reducer, initialState)

  const setIndex = (data: number | null) => {
    dispatch({
      type: SET_INDEX,
      payload: data,
    })
  }

  const setAccordion = (data: boolean) => {
    dispatch({
      type: SET_ACCORDION,
      payload: data,
    })
  }

  const setAnimated = (data: boolean) => {
    dispatch({
      type: SET_ANIMATED,
      payload: data,
    })
  }

  const setDivider = (data: boolean) => {
    dispatch({
      type: SET_DIVIDER,
      payload: data,
    })
  }

  const setOnChange = (data: TOnChangeCollapse) => {
    dispatch({
      type: SET_ON_CHANGE,
      payload: data,
    })
  }

  return (
    <context.Provider
      value={{
        accordion: state.accordion,
        animated: state.animated,
        divider: state.divider,
        onChange: state.onChange,
        index: state.index,
        setIndex,
        setAccordion,
        setAnimated,
        setDivider,
        setOnChange,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default FormProvider
