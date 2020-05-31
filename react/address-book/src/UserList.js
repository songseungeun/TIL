import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { MdStar } from "react-icons/md";

const UserListBlock = styled.div`
  .userlist {
    padding: 20px 10px;
  }
  .userlist li {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
  }
  .userlist li > strong {
    margin-right: 10px;
  }
  .userlist em {
    flex: 1;
  }
  .remove-btn {
    padding: 5px 8px;
    cursor: pointer;
  }
`;

const Favorite = styled.div`
  margin-right: 5px;
  font-size: 27px;
  cursor: pointer;
  color: #ccc;
  ${(props) =>
    props.active &&
    css`
      color: #deb887;
    `}
`;

function UserList({ users, removeUser, onToggle }) {
  // useEffect(() => {
  //   console.log("...loading 중 입니다");
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   };
  // }, [users]);
  return (
    <>
      <UserListBlock>
        <ul className="userlist">
          {users.map(({ id, username, email, active }) => (
            <li key={id} id={id}>
              <Favorite active={active} onClick={() => onToggle(id)}>
                <MdStar />
              </Favorite>
              <strong>{username}</strong>
              <em>{email}</em>
              <button className="remove-btn" onClick={() => removeUser(id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </UserListBlock>
    </>
  );
}

export default UserList;
