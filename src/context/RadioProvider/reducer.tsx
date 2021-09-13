import { IRadioInitialState } from 'core/domain/interfaces/IRadioContext'
import { SET_RADIO_SELECTED } from './types'

type TType = typeof SET_RADIO_SELECTED

interface IAction {
  type: TType
  payload: any
}

const reducer = (state: IRadioInitialState, action: IAction) => {
  const switcher = {
    SET_RADIO_SELECTED: {
      ...state,
      radioSelected: action.payload,
    }
  }

  return switcher[action.type]
}

export default reducer