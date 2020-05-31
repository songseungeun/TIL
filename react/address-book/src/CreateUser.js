import React from "react";
import styled from "styled-components";

const CreateBlock = styled.div`
  input {
    line-height: 35px;
    padding: 0 5px;
    font-size: 16px;
    margin: 5px;
    vertical-align: middle;
  }
  button {
    width: 40px;
    height: 37px;
    vertical-align: middle;
    font-size: 16px;
    cursor: pointer;
  }
`;
function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <>
      <CreateBlock>
        <input
          name="username"
          placeholder="name"
          value={username}
          className="input-name"
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="e-mail"
          value={email}
          className="input-mail"
          onChange={onChange}
        />
        <button className="add" onClick={onCreate}>
          +
        </button>
      </CreateBlock>
    </>
  );
}

export default CreateUser;
