import React, { useState, useEffect } from "react";

const StudyUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffext(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default StudyUseEffect;
