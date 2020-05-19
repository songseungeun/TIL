import React from "react";
import "./App.css";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <input
        name="username"
        placeholder="name"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="email"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </>
  );
}

export default CreateUser;
