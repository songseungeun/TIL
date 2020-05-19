// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useReducer } from "react";
import List from "./List";
import { initialState, reducer } from "./reducer/BookReducer";

const Book = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeInput = (e) => {
    const { name, value } = e.target;

    const action = {
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    };

    dispatch(action);
  };

  const date = new Date();

  const addPhone = async () => {
    const newPhone = {
      _id: date.getTime(),
      name: state.inputState.name,
      phone: state.inputState.phone,
    };
    await dispatch({
      type: "ADD_PHONE",
      newPhone: newPhone,
    });
  };

  const deletePhone = (_id) => {
    dispatch({
      type: "DELETE_PHONE",
      _id: _id,
    });
  };

  const phoneList = state.bookState;

  return (
    <div>
      <div>
        <input type="text" name="name" onChange={changeInput} />
        <input type="text" name="phone" onChange={changeInput} />
        <button onClick={addPhone}>번호 등록</button>
      </div>

      <List phone={phoneList} deletePhone={deletePhone} />
    </div>
  );
};

export default Book;
