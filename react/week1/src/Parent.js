import React, { useState, useRef } from "react";
import "./App.css";
import Child from "./Child";
function Parent() {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);

  // 상태값을 별도로 관리
  const parentLotto = lotto;
  const inputRef = useRef();

  // 로또 번호 생성기
  const makeLotto = () => {
    let lottoNumber = Array.from({ length: 7 }, function (v, i) {
      return (i = Math.floor(Math.random() * 44) + 1);
    });
    console.log(lottoNumber);
    setLotto(lottoNumber);
  };

  // input 값 바꾸기
  const changeInput = (e) => {
    console.log(e.target.value);
    // console.log(inputRef.current.value);
  };

  // render
  return (
    <div className="App">
      부모 컴포넌트
      <br />
      <button onClick={makeLotto}>로또 생성기</button>
      <br />
      <input type="text" ref={inputRef} onChange={changeInput} />
      <h1>{parentLotto.join(" / ")}</h1>
      <Child lotto={parentLotto}>
        <h3>자식의 자식</h3>
      </Child>
    </div>
  );
}

export default Parent;
