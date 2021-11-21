import { ITabInitialState } from 'core/domain/interfaces/ITabContext'
import { SET_TAB_ID_SELECT } from './types'

type TType = typeof SET_TAB_ID_SELECT

interface IAction {
  payload: any
  type: TType
}

const reducer = (state: ITabInitialState, { type, payload }: IAction) => {
  const switcher = {
    SET_TAB_ID_SELECT: {
      ...state,
      tabIdSelected: payload,
    },
  }

  return switcher[type]
}

export default reducer
