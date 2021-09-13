import { ISurveyInitialState } from 'core/domain/interfaces/ISurveyContext'
import {
  SET_CALLBACKS,
  SET_PERCENT,
  SET_SURVEY_OPTION_SELECTED,
  SET_TOTAL_QUESTIONS,
} from './types'

type TType =
  | typeof SET_CALLBACKS
  | typeof SET_PERCENT
  | typeof SET_SURVEY_OPTION_SELECTED
  | typeof SET_TOTAL_QUESTIONS

interface IAction {
  type: TType
  payload: any
}

const reducer = (state: ISurveyInitialState, action: IAction) => {
  const switcher = {
    SET_SURVEY_OPTION_SELECTED: {
      ...state,
      answers: { ...state.answers, ...action.payload },
    },
    SET_CALLBACKS: {
      ...state,
      callbacks: action.payload,
    },
    SET_PERCENT: {
      ...state,
      percent: action.payload,
    },
    SET_TOTAL_QUESTIONS: {
      ...state,
      totalQuestions: action.payload,
    },
  }

  return switcher[action.type]
}

export default reducer
