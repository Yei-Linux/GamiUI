import {
  SET_CALLBACKS,
  SET_FORM_VALUES,
  SET_YUP_ERRORS,
  SET_YUP_SCHEMA,
} from './types'

interface IAction {
  type: string
  payload: any
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      return {
        ...state,
        formValue: {
          ...state.formValue,
          [action.payload.name]: action.payload.value,
        },
      }
    case SET_CALLBACKS:
      return {
        ...state,
        callbacks: action.payload,
      }
    case SET_YUP_SCHEMA:
      return {
        ...state,
        yupSchema: action.payload,
      }

    case SET_YUP_ERRORS:
      return {
        ...state,
        yupErrors: action.payload,
      }
    default:
      return state
  }
}
