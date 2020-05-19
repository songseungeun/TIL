import React from "react";
import "./App.css";
import useData from "./Hook/useData";

function App() {
  const [state, inputChange, addPhone, deletePhone] = useData();
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
              {phone.name + " : " + phone.phone}
              &nbsp;
              <button
                onClick={() => {
                  deletePhone(phone._id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}

export default App;
