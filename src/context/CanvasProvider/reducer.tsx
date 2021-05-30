import { SET_CANVAS_VALUE, SET_POSITION_X, SET_POSITION_Y } from './types'

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
    case SET_POSITION_X:
      return {
        ...state,
        positionX: state.positionX + action.payload,
      }

    case SET_POSITION_Y:
      return {
        ...state,
        positionY: state.positionY + action.payload,
      }
    default:
      return state
  }
}
