import { IFormCommmonsContext } from 'core/domain/interfaces/IFormContext'
import {
  SET_CALLBACKS,
  SET_FORM_VALUES,
  SET_YUP_ERRORS,
  SET_YUP_SCHEMA,
} from './types'

type TTypes =
  | typeof SET_FORM_VALUES
  | typeof SET_CALLBACKS
  | typeof SET_YUP_SCHEMA
  | typeof SET_YUP_ERRORS

interface IAction {
  type: TTypes
  payload: any
}

const reducer = (state: IFormCommmonsContext, action: IAction) => {
  const switcher = {
    SET_FORM_VALUES: {
      ...state,
      formValue: {
        ...state.formValue,
        [action.payload?.name]: action.payload?.value,
      },
    },
    SET_CALLBACKS: {
      ...state,
      callbacks: action.payload,
    },
    SET_YUP_SCHEMA: {
      ...state,
      yupSchema: action.payload,
    },
    SET_YUP_ERRORS: {
      ...state,
      yupErrors: action.payload,
    },
  } as const

  return switcher[action.type]
}

export default reducer
