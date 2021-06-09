import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USER,
  GET_USER,
  GET_REPOS,
} from "../types";
let githubClientId;
let githubClientSecrete;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecrete = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecrete = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
const GithubState = (props) => {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //search_user
  const searchUsers = async (text) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}
    &client_secret=${githubClientSecrete}`);
    // console.log(res.data);
    console.log(res.data.items);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //Get User

  // individual users
  const getUser = async (username) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}
    &client_secret=${githubClientSecrete}`);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };
  //Get Repos

  // Get individual repos
  const getUserRepos = async (username) => {
    setLoading();
    const res =
      await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}
      &client_secret=${githubClientSecrete}`);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };
  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USER });

  //Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;