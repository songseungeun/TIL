import React, {
  useState,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";
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

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USERS":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    default:
      throw new Error("Unhandled action");
  }
}

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "song",
      email: "song@gmail.com",
      active: false,
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  // console.log(state);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USERS",
      user: {
        id: 4,
        username,
        email,
      },
    });
  }, [username, email]);

  // console.log(onCreate);
  // console.log(username);

  // const [inputs, setInputs] = useState();

  // const { username, email } = inputs;

  // const onChange = useCallback(
  //   ({ target }) => {
  //     const { value, name } = target;
  //     setInputs({ ...inputs, [name]: value });
  //   },
  //   [inputs]
  // );

  // const createId = useRef(4);

  //   createId.current += 1;
  // }, [username, email, users]);

  // const onToggle = useCallback(
  //   (id) => {
  //     setUsers(
  //       users.map((user) =>
  //         user.id === id ? { ...user, active: !user.active } : user
  //       )
  //     );
  //     console.log(users);
  //   },
  //   [users]
  // );

  // const removeUser = useCallback(
  //   (id) => {
  //     setUsers(users.filter((user) => user.id !== id));
  //   },
  //   [users]
  // );

  // const count = useMemo(() => countActiveUsers(users), [users]);

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
          즐겨찾기 한 사람은 <strong>0명</strong> 입니다.
        </div>
        <UserList users={users} />
      </div>
    </>
  );
}

export default React.memo(App);
