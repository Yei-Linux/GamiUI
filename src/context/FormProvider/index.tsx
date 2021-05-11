import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_CALLBACKS, SET_FORM_VALUES } from './types'

interface ISetFormSelected {
  name: string
  value: string
}

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    formValue: null,
    callbacks: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setFormValues = (data: ISetFormSelected) => {
    dispatch({
      type: SET_FORM_VALUES,
      payload: data,
    })
  }

  const setCallbacks = (data: any) => {
    dispatch({
      type: SET_CALLBACKS,
      payload: data,
    })
  }

  const onClickSubmit = (values: any) => {
    if (state.callbacks) {
      state.callbacks?.onFinish(values)
    }
  }

  return (
    <context.Provider
      value={{
        formValue: state.formValue,
        clickSubmit: state.clickSubmit,
        setFormValues,
        setCallbacks,
        onClickSubmit,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default FormProvider
