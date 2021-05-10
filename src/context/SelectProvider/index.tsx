import React, { useReducer } from "react";
import context from "./context";
import reducer from "./reducer";
import { SET_OPTION_SELECTED } from "./types";

interface ISetOptionSelected {
  text: string;
  value: string;
}

const SelectProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState = {
    optionSelected: { value: "", text: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setOptionSelected = (data: ISetOptionSelected) => {
    dispatch({
      type: SET_OPTION_SELECTED,
      payload: data,
    });
  };

  return (
    <context.Provider
      value={{
        optionSelected: state.optionSelected,
        setOptionSelected,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default SelectProvider;
