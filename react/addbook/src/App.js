import React, { useState } from "react";
import "./App.css";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "song",
      email: "grayandjj@gmail.com",
    },
    {
      id: 2,
      username: "kim",
      email: "bbd@gmail.com",
    },
  ]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    console.log(username);
    console.log(email);
    if (username === "" &&) console.log("a");
    const user = {
      id: 4,
      username,
      email,
    };

    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
