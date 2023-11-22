import { ITabInitialState } from 'core/domain/interfaces/ITabContext'
import { SET_TAB_ID_SELECT, SET_TABS_AVAILABLE } from './types'

type TType = typeof SET_TAB_ID_SELECT | typeof SET_TABS_AVAILABLE

interface IAction {
  payload: any
  type: TType
}

const reducer = (state: ITabInitialState, { type, payload }: IAction) => {
  const switcher = {
    [SET_TAB_ID_SELECT]: {
      ...state,
      tabIdSelected: payload,
    },
    [SET_TABS_AVAILABLE]: {
      ...state,
      tabsAvailable: [...new Set([...state.tabsAvailable, payload])],
    },
  }

  return switcher[type]
}

export default reducer
