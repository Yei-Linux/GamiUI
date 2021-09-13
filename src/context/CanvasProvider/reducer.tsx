import {
  ICanvasInitialState,
  IDirPayload,
} from 'core/domain/interfaces/ICanvasContext'
import { SET_CANVAS_VALUE, SET_CURRENT_DIRECTION, SET_DIRS } from './types'

type TTypes = typeof SET_CANVAS_VALUE | typeof SET_CURRENT_DIRECTION | typeof SET_DIRS

interface IAction {
  type: TTypes
  payload: any
}

const reducer = (state: ICanvasInitialState, action: IAction) => {
  const switcher = {
    SET_CANVAS_VALUE: {
      ...state,
      canvasValue: action.payload,
    },
    SET_CURRENT_DIRECTION: {
      ...state,
      currentDirection: action.payload,
    },
    SET_DIRS: {
      ...state,
      dirs: {
        ...state.dirs,
        [(action.payload as IDirPayload).currentDirection]: {
          x: (action.payload as IDirPayload).x,
          y: state.dirs[(action.payload as IDirPayload).currentDirection].y,
        },
      },
    },
  } as const

  return switcher[action.type]
}

export default reducer