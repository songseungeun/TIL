import React, { Component } from "react";
import ButtonChild01 from "./ButtonChild01";
import ButtonChild02 from "./ButtonChild02";

const AppStyle = {
  padding: 100,
  margin: 100,
  border: "1px solid #333",
};

class App extends Component {
  render() {
    return (
      <div className="App" style={AppStyle}>
        <h2>{"부모 컴포넌트"}</h2>
        <ButtonChild01 title={"보라색 버튼"} color={"purple"} />
        <ButtonChild02 title={"빨간색 버튼"} color={"red"} />
      </div>
    );
  }
}

export default App;
