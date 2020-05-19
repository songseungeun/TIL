import React from "react";
import "./App.css";
import { finedustApi } from "./api";

function App() {
  console.log(finedustApi);
  return (
    <div className="App">
      <div className="">지역</div>
      <div className=""></div>
      <div className="">미세먼지농도</div>
      <div className=""></div>
    </div>
  );
}

export default App;
