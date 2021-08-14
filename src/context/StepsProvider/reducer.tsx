import { IAction } from '../../core/domain/interfaces/IContext'
import { SET_CURRENT_STEP } from './types'

export default (state: any, { type, payload }: IAction) => {
  switch (type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: payload,
      }

    default:
      return state
  }
}
