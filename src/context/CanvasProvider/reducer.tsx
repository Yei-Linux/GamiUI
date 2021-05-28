import { SET_CANVAS_VALUE, SET_IS_VISIBLE } from './types'

interface IAction {
  type: string
  payload: any
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_CANVAS_VALUE:
      return {
        ...state,
        canvasValue: action.payload,
      }
    case SET_IS_VISIBLE:
      return {
        ...state,
        isVisible: action.payload,
      }
    default:
      return state
  }
}
