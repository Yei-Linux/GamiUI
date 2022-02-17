import { ICollapseCollomsContext } from 'core/domain/interfaces/ICollapseContext'
import {
  SET_ACCORDION,
  SET_ANIMATED,
  SET_DIVIDER,
  SET_INDEX,
  SET_ON_CHANGE,
} from './types'

type TTypes =
  | typeof SET_ACCORDION
  | typeof SET_ANIMATED
  | typeof SET_DIVIDER
  | typeof SET_ON_CHANGE
  | typeof SET_INDEX

interface IAction {
  type: TTypes
  payload: any
}

const reducer = (state: ICollapseCollomsContext, action: IAction) => {
  const switcher = {
    SET_INDEX: {
      ...state,
      index: action.payload,
    },
    SET_ACCORDION: {
      ...state,
      accordion: action.payload,
    },
    SET_ANIMATED: {
      ...state,
      animated: action.payload,
    },
    SET_DIVIDER: {
      ...state,
      divider: action.payload,
    },
    SET_ON_CHANGE: {
      ...state,
      onChange: action.payload,
    },
  } as const

  return switcher[action.type]
}

export default reducer
