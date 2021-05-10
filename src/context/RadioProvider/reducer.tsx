import { SET_RADIO_SELECTED } from "./types";


interface IAction {
  type: string;
  payload: any;
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_RADIO_SELECTED:
      return {
        ...state,
        radioSelected: action.payload,
      };
    default:
      return state;
  }
};
