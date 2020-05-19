import React, { useReducer, useCallback } from "react";
import { reducer, initialState } from "../reducer/phoneReducer";

const useData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      const action = {
        type: "CHANGE_INPUT",
        name: name,
        value: value,
      };

      dispatch(action);

      // setState({
      //   inputState: {
      //     ...state.inputState,
      //     [name]: value,
      //   },
      //   bookState: [...state.bookState],
      // });
    },
    [state]
  );

  const addPhone = () => {
    const date = new Date();
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };

    dispatch({
      type: "ADD_PHONE",
      newPhone: newPhone,
    });

    // setState({
    //   inputState: initialState.inputState,
    //   bookState: state.bookState.concat(newPhone),
    // });
  };

  const deletePhone = (_id) => {
    dispatch({
      type: "DELETE_PHONE",
      _id: _id,
    });
  };

  return [state, inputChange, addPhone, deletePhone];
};

export default useData;
