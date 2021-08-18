import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS,
  SET_FORM_VALUES,
  SET_YUP_ERRORS,
  SET_YUP_SCHEMA,
} from './types'

interface ISetFormSelected {
  name: string
  value: string
}

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    formValue: null,
    callbacks: null,
    yupSchema: null,
    yupErrors: null,
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

  const setYupSchema = (data: any) => {
    dispatch({
      type: SET_YUP_SCHEMA,
      payload: data,
    })
  }

  const setYupErrors = (data: any) => {
    dispatch({
      type: SET_YUP_ERRORS,
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
        yupSchema: state.yupSchema,
        yupErrors: state.yupErrors,
        setYupErrors,
        setYupSchema,
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
