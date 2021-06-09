import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./../layout/Sppiner";
import GithubContext from "./../../contaxt/github/githubContext";
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "10px",
};
export default Users;
