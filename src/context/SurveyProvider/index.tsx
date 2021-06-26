import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_CALLBACKS, SET_SURVEY_OPTION_SELECTED } from './types'

interface ISetOptionSelected {
  questionId: string
  response: any
}

const SurveyProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    answers: null,
    callbacks: null,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const setSurveyOptionSelected = (data: ISetOptionSelected) => {
    dispatch({
      type: SET_SURVEY_OPTION_SELECTED,
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
        answers: state.answers,
        setSurveyOptionSelected,
        setCallbacks,
        onClickSubmit,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default SurveyProvider