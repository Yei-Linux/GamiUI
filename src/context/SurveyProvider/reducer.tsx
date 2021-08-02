import {
  SET_CALLBACKS,
  SET_CURRENT_QUESTION,
  SET_PERCENT,
  SET_SURVEY_OPTION_SELECTED,
  SET_TOTAL_QUESTIONS,
} from './types'

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
    case SET_PERCENT:
      return {
        ...state,
        percent: action.payload,
      }
    case SET_TOTAL_QUESTIONS:
      return {
        ...state,
        totalQuestions: action.payload,
      }

    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      }
    default:
      return state
  }
}
