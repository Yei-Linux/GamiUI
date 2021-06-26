import {
  SET_CALLBACKS_CANVAS,
  SET_CANVAS_VALUE,
  SET_CURRENT_DIRECTION,
  SET_DIRS,
} from './types'

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
    case SET_CALLBACKS_CANVAS:
      return {
        ...state,
        callbacks: action.payload,
      }

    case SET_CURRENT_DIRECTION:
      return {
        ...state,
        currentDirection: action.payload,
      }

    case SET_DIRS:
      return {
        ...state,
        dirs: {
          ...state.dirs,
          [action.payload.currentDirection]: {
            x: action.payload.x,
            y: state.dirs[action.payload.currentDirection].y,
          },
        },
      }
    default:
      return state
  }
}
