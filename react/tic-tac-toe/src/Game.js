import React, { useState } from "react";
import "./App.css";
import Square from "./Square";

function Game() {
  const [state, setStates] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  const handleClick = (i) => {
    const squares = state.squares.slice();

    squares[i] = state.xIsNext ? "X" : "O";
    setStates({ squares: squares, xIsNext: !state.xIsNext });
  };

  const square = (i) => {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="game-wrapper">
      {/* <div className="status">{status}</div> */}
      <div className="row">
        {square(0)}
        {square(1)}
        {square(2)}
      </div>
      <div className="row">
        {square(3)}
        {square(4)}
        {square(5)}
      </div>
      <div className="row">
        {square(6)}
        {square(7)}
        {square(8)}
      </div>
    </div>
  );
}

export default Game;
