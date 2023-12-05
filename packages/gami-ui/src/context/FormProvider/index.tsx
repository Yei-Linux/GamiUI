import { IDynamicObjectWithField } from 'core/domain/interfaces/common'
import { IFormValueItem } from 'core/domain/interfaces/IFormContext'
import React, { useReducer } from 'react'
import { ObjectSchema } from 'yup'
import context from './context'
import reducer from './reducer'
import {
  SET_CALLBACKS,
  SET_FORM_VALUES,
  SET_INITIAL_FORM_VALUE,
  SET_YUP_ERRORS,
  SET_YUP_SCHEMA,
} from './types'

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    formValue: null,
    callbacks: null,
    yupSchema: null,
    yupErrors: null,
  } as const

  const [state, dispatch] = useReducer(reducer, initialState)

  const setInitialFormValues = (data: Record<string, unknown>) => {
    dispatch({
      type: SET_INITIAL_FORM_VALUE,
      payload: data,
    })
  }

  const setFormValues = (data: IFormValueItem) => {
    dispatch({
      type: SET_FORM_VALUES,
      payload: data,
    })
  }

  const setCallbacks = (data: IDynamicObjectWithField) => {
    dispatch({
      type: SET_CALLBACKS,
      payload: data,
    })
  }

  const setYupSchema = (data: ObjectSchema<any, any, any>) => {
    dispatch({
      type: SET_YUP_SCHEMA,
      payload: data,
    })
  }

  const setYupErrors = (data: IDynamicObjectWithField) => {
    dispatch({
      type: SET_YUP_ERRORS,
      payload: data,
    })
  }

  const onClickSubmit = (values: IDynamicObjectWithField) => {
    if (state.callbacks) {
      state.callbacks?.onFinish(values)
    }
  }

  return (
    <context.Provider
      value={{
        formValue: state.formValue,
        yupSchema: state.yupSchema,
        yupErrors: state.yupErrors,
        setYupErrors,
        setYupSchema,
        setFormValues,
        setCallbacks,
        setInitialFormValues,
        onClickSubmit,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default FormProvider
