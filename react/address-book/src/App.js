import React, { useState, useRef, useMemo } from "react";
import { createGlobalStyle } from "styled-components";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  body * {
    box-sizing: border-box;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .wrapper {
    width: 540px;
    height: 600px;

    background: #f4f4f4;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

    margin: 50px auto;
    padding: 20px 50px;
    
  }
  h1 {
    margin: 0 auto;
    text-align: center;
    padding: 10px
  }
  .fav-length {
    padding: 15px 8px 0 8px;
    font-size: 18px;
  }
`;
function countActiveUsers(users) {
  console.log("즐겨찾기 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = ({ target }) => {
    const { value, name } = target;
    setInputs({ ...inputs, [name]: value });
  };

  const initialState = [
    {
      id: 1,
      username: "song",
      email: "song@gmail.com",
      active: false,
    },
  ];

  const [users, setUsers] = useState(initialState);

  const createId = useRef(4);

  const onCreate = () => {
    const user = {
      id: createId.current,
      username,
      email,
      active: false,
    };
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });

    createId.current += 1;
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
    console.log(users);
  };

  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <h1>Address Book</h1>
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <div className="fav-length">
          즐겨찾기 한 사람은 <strong>{count}명</strong> 입니다.
        </div>
        <UserList users={users} removeUser={removeUser} onToggle={onToggle} />
      </div>
    </>
  );
}

export default App;
