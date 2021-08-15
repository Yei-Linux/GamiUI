import { IAction } from '../../core/domain/interfaces/IContext'
import { SET_TAB_ID_SELECT } from './types'

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