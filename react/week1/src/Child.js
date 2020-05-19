import React from "react";

const Child = ({ lotto, children }) => {
  return (
    <>
      <h2>자식 컴포넌트</h2>
      {children}
      <h3>{lotto.join(" / ")}</h3>
    </>
  );
};

export default Child;
