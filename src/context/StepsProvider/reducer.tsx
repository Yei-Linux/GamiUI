import { SET_CURRENT_STEP } from './types'

interface IAction {
  type: typeof SET_CURRENT_STEP
  payload: any
}

const reducer = (state: any, { type, payload }: IAction) => {
  const switcher = {
    SET_CURRENT_STEP: {
      ...state,
      currentStep: payload,
    },
  }

  return switcher[type]
}

export default reducer
