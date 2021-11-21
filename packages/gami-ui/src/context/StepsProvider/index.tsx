import React, { useReducer } from 'react'
import context from './context'
import reducer from './reducer'
import { SET_CURRENT_STEP } from './types'

export interface IStepsProvider {
  children: React.ReactNode
}

export interface IInitialState {
  currentStep: number
}

const StepsProvider = ({ children }: IStepsProvider) => {
  const initialState: IInitialState = {
    currentStep: 0,
  } as const

  const [state, dispatch] = useReducer(reducer, initialState)

  const setCurrentStep = (step: number) => {
    dispatch({
      type: SET_CURRENT_STEP,
      payload: step,
    })
  }

  return (
    <context.Provider
      value={{
        currentStep: state.currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </context.Provider>
  )
}

export default StepsProvider
