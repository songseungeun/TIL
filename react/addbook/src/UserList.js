import React from "react";
import "./App.css";

function UserList({ users }) {
  return (
    <ul>
      {users.map(({ id, username, email }) => (
        <li key={id}>
          <strong>{username}</strong> {email}
          <button>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
