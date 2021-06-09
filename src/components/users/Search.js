import React, { useContext, useState } from "react";
import GithubContext from "./../../contaxt/github/githubContext";
import AlertContext from "./../../contaxt/alert/alertContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <h2>Search The Github Users</h2>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="search"
          className="btn btn-dark btn-block"
        />
        {githubContext.users.length > 0 && (
          <button
            onClick={githubContext.clearUsers}
            className="btn btn-light btn-block"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

export default Search;
