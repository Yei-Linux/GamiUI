import { SET_OPTION_SELECTED } from "./types";

interface IAction {
  type: string;
  payload: any;
}

export default (state: any, action: IAction) => {
  switch (action.type) {
    case SET_OPTION_SELECTED:
      return {
        ...state,
        optionSelected: action.payload,
      };
    default:
      return state;
  }
};
