import { SET_CALLBACKS, SET_FORM_VALUES } from './types'

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
    default:
      return state
  }
}
