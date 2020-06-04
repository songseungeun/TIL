import React, { useContext, useRef } from "react";
import styled from "styled-components";
import useInputs from "./useInputs";
import { UserDispatch } from "./App";

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
function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: "CREATE_USER",
      user: { id: nextId.current, username, email },
    });
    nextId.current += 1;
    reset();
  };

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

export default React.memo(CreateUser);
