import React, {
  useRef,
  useMemo,
  useCallback,
  useReducer,
  createContext,
} from "react";
import { createGlobalStyle } from "styled-components";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInputs from "./useInputs";

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
  // console.log("즐겨찾기 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      // return;
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled action");
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const count = useMemo(() => countActiveUsers(users), [users]);
  console.log(state);
  return (
    <UserDispatch.Provider value={dispatch}>
      <GlobalStyle />
      <div className="wrapper">
        <h1>Address Book</h1>
        <CreateUser />
        <div className="fav-length">
          즐겨찾기 한 사람은 <strong>{count}명</strong> 입니다.
        </div>
        <UserList users={users} />
      </div>
    </UserDispatch.Provider>
  );
}

export default React.memo(App);
