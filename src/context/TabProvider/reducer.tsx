import { SET_TAB_ID_SELECT } from './types'

interface IAction {
  type: string
  payload: any
}

export default (state: any, { type, payload }: IAction) => {
  switch (type) {
    case SET_TAB_ID_SELECT:
      return {
        ...state,
        tabIdSelected: payload,
      }

    default:
      return state
  }
}
