import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducer/phoneReducer";

function App() {
  // const [state, setState] = useState(initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  const inputChange = (e) => {
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
  };

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

  return (
    <div className="App">
      <h1>무한 반복 예제 전화번호부</h1>
      이름:
      <input type="text" name="name" onChange={inputChange} />
      번호:
      <input type="text" name="phone" onChange={inputChange} />
      <button onClick={addPhone}>번호저장</button>
      <ul>
        {state.bookState.map((phone) => {
          return (
            <li>
              {phone.name + ":" + phone.phone}
              <button
                onClick={() => {
                  deletePhone(phone._id);
                }}
              ></button>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}

export default App;
