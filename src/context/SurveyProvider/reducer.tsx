import { SET_CALLBACKS, SET_SURVEY_OPTION_SELECTED } from './types'

interface IAction {
  type: string
  payload: any
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_SURVEY_OPTION_SELECTED:
      return {
        ...state,
        answers: { ...state.answers, ...action.payload },
      }
    case SET_CALLBACKS:
      return {
        ...state,
        callbacks: action.payload,
      }
    default:
      return state
  }
}
