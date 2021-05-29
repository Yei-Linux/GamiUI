import { SET_CANVAS_VALUE } from './types'

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
    default:
      return state
  }
}
